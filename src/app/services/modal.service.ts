import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
  isOpenModal: boolean = false;

  private isOpenModalSubject = new BehaviorSubject<boolean>(false);
  isOpenModalChanged = this.isOpenModalSubject.asObservable();

  constructor() { }

  changeModalState(): void {
    this.isOpenModal = !this.isOpenModal;
    this.isOpenModalSubject.next(this.isOpenModal);
  }

}
