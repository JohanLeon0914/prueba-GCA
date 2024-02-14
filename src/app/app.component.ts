import { AfterViewInit, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SellersComponent } from './components/sellers/sellers.component';
import { HttpClientModule } from '@angular/common/http';
import { MapComponent } from './components/map/map.component';
import { CreateSellerModalComponent } from './components/create-seller-modal/create-seller-modal.component';
import { ModalService } from './services/modal.service';
import { MenuComponent } from './components/menu/menu.component';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SellersComponent, MapComponent, CreateSellerModalComponent, MenuComponent, HttpClientModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements AfterViewInit {
  isOpenModal: boolean = false;
  menuItemSelected: string = "home";
  constructor(private modalSvc: ModalService, private utilSvc: UtilService) {
  }

  ngAfterViewInit() {
    this.modalSvc.isOpenModalChanged.subscribe(() => {
      this.isOpenModal = this.modalSvc.isOpenModal
    })
    this.utilSvc.menuItemChanged.subscribe(() => {
      this.menuItemSelected = this.utilSvc.menuItemSelected
    })
  }

}
