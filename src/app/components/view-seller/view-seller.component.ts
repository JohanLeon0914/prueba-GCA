import { Component, Input } from '@angular/core';
import { SellerModel } from '../../types/Seller';

@Component({
  selector: 'app-view-seller',
  standalone: true,
  imports: [],
  templateUrl: './view-seller.component.html',
  styleUrl: './view-seller.component.css'
})
export class ViewSellerComponent {
  @Input() seller: SellerModel;
  
}
