import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtml5IndexeddbComponent } from './coursehtml5-indexeddb.component';

describe('Coursehtml5IndexeddbComponent', () => {
  let component: Coursehtml5IndexeddbComponent;
  let fixture: ComponentFixture<Coursehtml5IndexeddbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5IndexeddbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5IndexeddbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
