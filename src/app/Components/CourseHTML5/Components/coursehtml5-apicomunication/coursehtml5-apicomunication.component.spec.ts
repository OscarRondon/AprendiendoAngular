import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtml5ApicomunicationComponent } from './coursehtml5-apicomunication.component';

describe('Coursehtml5ApicomunicationComponent', () => {
  let component: Coursehtml5ApicomunicationComponent;
  let fixture: ComponentFixture<Coursehtml5ApicomunicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5ApicomunicationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5ApicomunicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
