import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtml5MainmenuComponent } from './coursehtml5-mainmenu.component';

describe('Coursehtml5MainmenuComponent', () => {
  let component: Coursehtml5MainmenuComponent;
  let fixture: ComponentFixture<Coursehtml5MainmenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5MainmenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5MainmenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
