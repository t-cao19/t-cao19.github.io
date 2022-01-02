import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxVerticalTimelineComponent } from './ngx-vertical-timeline.component';

describe('NgxVerticalTimelineComponent', () => {
  let component: NgxVerticalTimelineComponent;
  let fixture: ComponentFixture<NgxVerticalTimelineComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxVerticalTimelineComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxVerticalTimelineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
