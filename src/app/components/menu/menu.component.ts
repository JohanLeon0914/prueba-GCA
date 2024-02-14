import { Component } from '@angular/core';
import { UtilService } from '../../services/util.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {

  selectectItem: string = 'home';

  constructor(private utilSvc: UtilService) {
  }

  onChangeMenuItemSelect(menuItem: string) {
    this.utilSvc.setMenuItemSelect(menuItem)
    this.selectectItem = menuItem;
  }

}
