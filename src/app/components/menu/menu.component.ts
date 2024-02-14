import { Component } from '@angular/core';
import { UtilService } from '../../services/util.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private utilSvc: UtilService) {
  }

  onChangeMenuItemSelect(menuItem: string) {
    this.utilSvc.setMenuItemSelect(menuItem)
  }

}
