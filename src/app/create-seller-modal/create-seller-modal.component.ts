import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SellerModel } from '../types/Seller';
import { ModalService } from '../services/modal.service';
import { SellersService } from '../services/sellers.service';

@Component({
  selector: 'app-create-seller-modal',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './create-seller-modal.component.html',
  styleUrl: './create-seller-modal.component.css'
})
export class CreateSellerModalComponent {
  sellerForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private modalSvc: ModalService, private sellersSvc: SellersService) {
    this.createForm();
  }

  createForm() {
    this.sellerForm = this.formBuilder.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      category: ['', Validators.required],
      address: ['', Validators.required],
      photo: ['', Validators.required],
      vehicle: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.sellerForm.valid) {
      const sellerData = this.sellerForm.value;
      const seller: SellerModel = {
        id: sellerData.id,
        name: sellerData.name,
        category: sellerData.category,
        address: sellerData.address,
        photo: sellerData.photo,
        vehicle: sellerData.vehicle
      };
      console.log(seller)
      this.sellersSvc.createSalesman(seller).subscribe(
        createdSeller => {
          console.log('Vendedor creado:', createdSeller);
        },
        error => {
          console.error('Error al crear vendedor:', error);
        }
      );
    } else {
    }
  }

  closeModal() {
    this.modalSvc.changeModalState();
  }
}
