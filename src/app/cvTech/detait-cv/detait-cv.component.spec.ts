import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetaitCvComponent } from './detait-cv.component';

describe('DetaitCvComponent', () => {
  let component: DetaitCvComponent;
  let fixture: ComponentFixture<DetaitCvComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetaitCvComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetaitCvComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
