import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtml5Component } from './coursehtml5.component';

describe('Coursehtml5Component', () => {
  let component: Coursehtml5Component;
  let fixture: ComponentFixture<Coursehtml5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
