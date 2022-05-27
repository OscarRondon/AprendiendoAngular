import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProducCartComponent } from './produc-cart.component';

describe('ProducCartComponent', () => {
  let component: ProducCartComponent;
  let fixture: ComponentFixture<ProducCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProducCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProducCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
