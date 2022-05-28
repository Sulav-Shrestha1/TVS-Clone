import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreeWheelerListComponent } from './three-wheeler-list.component';

describe('ThreeWheelerListComponent', () => {
  let component: ThreeWheelerListComponent;
  let fixture: ComponentFixture<ThreeWheelerListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThreeWheelerListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreeWheelerListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
