import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Coursehtml5GeolocationComponent } from './coursehtml5-geolocation.component';

describe('Coursehtml5GeolocationComponent', () => {
  let component: Coursehtml5GeolocationComponent;
  let fixture: ComponentFixture<Coursehtml5GeolocationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5GeolocationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5GeolocationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
