import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtml5WelcomeComponent } from './coursehtml5-welcome.component';

describe('Coursehtml5WelcomeComponent', () => {
  let component: Coursehtml5WelcomeComponent;
  let fixture: ComponentFixture<Coursehtml5WelcomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5WelcomeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5WelcomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
