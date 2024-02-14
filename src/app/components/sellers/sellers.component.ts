import { AfterViewInit, Component, Input, Output } from '@angular/core';
import { SellersService } from '../../services/sellers.service';
import { SellerModel } from '../../types/Seller';
import { CommonModule } from '@angular/common';
import { EventEmitter } from 'stream';
import { CoordinatesService } from '../../services/coordinates.service';
import { ModalService } from '../../services/modal.service';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent implements AfterViewInit {

  sellers: SellerModel[];

  constructor(private sellersService: SellersService, private coordinatesService: CoordinatesService, private modalSvc: ModalService) {
  }

  ngOnInit(): void {
    this.getSalesmen();
  }

  ngAfterViewInit() {
    this.sellersService.sellersChanged.subscribe(() => {
      this.sellers = this.sellersService.sellers
    })
  }
  

  getSalesmen(): void {
    this.sellersService.getSalesmen()
      .subscribe((data: SellerModel[]) => {
        this.sellers = data;
      });
  }

  sendCoordinates(seller: SellerModel): void {
    this.coordinatesService.setCoordinates(seller);
  }

  createModal(): void {
    this.modalSvc.changeModalState();
  }
  
}
