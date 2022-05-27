import { ComponentFixture, TestBed } from '@angular/core/testing';

//W3C Forms

import { Coursehtml5FormsComponent } from './coursehtml5-forms.component';

describe('Coursehtml5FormsComponent', () => {
  let component: Coursehtml5FormsComponent;
  let fixture: ComponentFixture<Coursehtml5FormsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5FormsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5FormsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
