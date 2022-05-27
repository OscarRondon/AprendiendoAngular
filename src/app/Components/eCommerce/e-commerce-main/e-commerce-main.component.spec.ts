import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ECommerceMainComponent } from './e-commerce-main.component';

describe('ECommerceMainComponent', () => {
  let component: ECommerceMainComponent;
  let fixture: ComponentFixture<ECommerceMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ECommerceMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ECommerceMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
