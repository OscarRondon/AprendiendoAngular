import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtml5FilesComponent } from './coursehtml5-files.component';

describe('Coursehtml5FilesComponent', () => {
  let component: Coursehtml5FilesComponent;
  let fixture: ComponentFixture<Coursehtml5FilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtml5FilesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtml5FilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
