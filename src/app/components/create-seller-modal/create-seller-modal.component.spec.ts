import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSellerModalComponent } from './create-seller-modal.component';

describe('CreateSellerModalComponent', () => {
  let component: CreateSellerModalComponent;
  let fixture: ComponentFixture<CreateSellerModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateSellerModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateSellerModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
