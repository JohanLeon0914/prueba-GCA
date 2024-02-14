import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  isLoading = new BehaviorSubject<boolean>(false);

  menuItemSelected: string;

  private menuItemSelectedSubject = new BehaviorSubject<string>("");

  menuItemChanged = this.menuItemSelectedSubject.asObservable();

  constructor() { }

  setMenuItemSelect(menuItem: string): void {
    this.menuItemSelected = menuItem;
    this.menuItemSelectedSubject.next(menuItem);
  }

}
