import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtml5DraganddropComponent } from './coursehtml5-draganddrop.component';

describe('Coursehtml5DraganddropComponent', () => {
  let component: Coursehtml5DraganddropComponent;
  let fixture: ComponentFixture<Coursehtml5DraganddropComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5DraganddropComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5DraganddropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
