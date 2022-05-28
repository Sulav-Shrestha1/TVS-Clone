import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OfferproductComponent } from './offerproduct.component';

describe('OfferproductComponent', () => {
  let component: OfferproductComponent;
  let fixture: ComponentFixture<OfferproductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OfferproductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OfferproductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
