import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Coursehtlm5CanvasComponent } from './coursehtlm5-canvas.component';

describe('Coursehtlm5CanvasComponent', () => {
  let component: Coursehtlm5CanvasComponent;
  let fixture: ComponentFixture<Coursehtlm5CanvasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Coursehtlm5CanvasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Coursehtlm5CanvasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
