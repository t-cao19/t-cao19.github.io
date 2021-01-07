import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MATA37TutorialComponent } from './mata37-tutorial.component';

describe('MATA37TutorialComponent', () => {
  let component: MATA37TutorialComponent;
  let fixture: ComponentFixture<MATA37TutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MATA37TutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MATA37TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
