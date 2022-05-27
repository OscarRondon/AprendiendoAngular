import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularMainComponent } from './angular-main.component';

describe('AngularMainComponent', () => {
  let component: AngularMainComponent;
  let fixture: ComponentFixture<AngularMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AngularMainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
