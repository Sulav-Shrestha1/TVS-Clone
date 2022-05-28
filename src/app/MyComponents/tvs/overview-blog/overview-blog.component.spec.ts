import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OverviewBlogComponent } from './overview-blog.component';

describe('OverviewBlogComponent', () => {
  let component: OverviewBlogComponent;
  let fixture: ComponentFixture<OverviewBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OverviewBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OverviewBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
