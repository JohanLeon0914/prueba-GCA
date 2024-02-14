import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SellerModel } from '../types/Seller';

@Injectable({
  providedIn: 'root'
})
export class SellersService {
  private baseUrl = 'http://74.235.109.154/api';

  constructor(private http: HttpClient) { }

  getSalesmen(): Observable<SellerModel[]> {
    return this.http.get<any[]>(`${this.baseUrl}/salesman`);
  }

}
