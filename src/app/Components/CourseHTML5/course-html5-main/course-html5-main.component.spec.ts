import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CourseHTML5MainComponent } from './course-html5-main.component';

describe('CourseHTML5MainComponent', () => {
  let component: CourseHTML5MainComponent;
  let fixture: ComponentFixture<CourseHTML5MainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CourseHTML5MainComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseHTML5MainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
