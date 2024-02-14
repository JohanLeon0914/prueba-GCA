import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SellerModel } from '../types/Seller';

@Injectable({
  providedIn: 'root'
})
export class CoordinatesService {
  
  sellerSelected: SellerModel;

  // BehaviorSubject para emitir cambios en las coordenadas
  private coordinatesSubject = new BehaviorSubject<SellerModel | null>(null);

  // Observable para que los componentes se suscriban a los cambios
  coordinatesChanged = this.coordinatesSubject.asObservable();

  constructor() { }

  // Método para actualizar los datos de longitud y latitud
  setCoordinates(seller: SellerModel): void {
    this.sellerSelected = seller;
    this.coordinatesSubject.next(seller);
  }

  setSellerSelected(seller: SellerModel): void {
    this.sellerSelected = seller;
  }

}
