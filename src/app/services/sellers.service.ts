import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, interval, map, switchMap, tap } from 'rxjs';
import { SellerModel } from '../types/Seller';
import { UtilService } from './util.service';

@Injectable({
  providedIn: 'root'
})
export class SellersService {
  private baseUrl = 'http://74.235.109.154/api';
  sellers: SellerModel[] = [];
  private sellersSubject = new BehaviorSubject<SellerModel[]>([]);
  sellersChanged = this.sellersSubject.asObservable();

  constructor(private http: HttpClient, private utilSvc: UtilService) {
    this.loadSalesmen();
  }

  loadSalesmen() {
    this.getSalesmen().subscribe(salesmen => {
      this.sellers = salesmen;
      this.sellersSubject.next([...this.sellers]);
    });
  }

  getSalesmen(): Observable<SellerModel[]> {
    return this.http.get<SellerModel[]>(`${this.baseUrl}/salesman`);
  }

  createSalesman(seller: SellerModel): Observable<SellerModel> {
    this.utilSvc.isLoading.next(true);
    return this.http.post<SellerModel>(`${this.baseUrl}/salesman`, seller).pipe(
      switchMap(createdSeller => {
        return this.getSalesmen().pipe(
          tap(salesmen => {
            this.utilSvc.isLoading.next(false);
            this.sellers = salesmen;
            this.sellersSubject.next([...this.sellers]);
          }),
          map(() => createdSeller) 
        );
      })
    );
  }


}
