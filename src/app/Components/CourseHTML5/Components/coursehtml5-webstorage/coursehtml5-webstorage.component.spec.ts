import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtml5WebstorageComponent } from './coursehtml5-webstorage.component';

describe('Coursehtml5WebstorageComponent', () => {
  let component: Coursehtml5WebstorageComponent;
  let fixture: ComponentFixture<Coursehtml5WebstorageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5WebstorageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5WebstorageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
