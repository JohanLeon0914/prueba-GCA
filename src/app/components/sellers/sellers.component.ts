import { Component } from '@angular/core';
import { SellersService } from '../../services/sellers.service';
import { SellerModel } from '../../types/Seller';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sellers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './sellers.component.html',
  styleUrl: './sellers.component.css'
})
export class SellersComponent {

  sellers: SellerModel[];

  constructor(private sellersService: SellersService) { }

  ngOnInit(): void {
    this.getSalesmen();
  }

  getSalesmen(): void {
    this.sellersService.getSalesmen()
      .subscribe((data: SellerModel[]) => {
        this.sellers = data;
      });
  }
}
