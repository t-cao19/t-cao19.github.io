import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MATA32TutorialComponent } from './mata32-tutorial.component';

describe('MATA32TutorialComponent', () => {
  let component: MATA32TutorialComponent;
  let fixture: ComponentFixture<MATA32TutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MATA32TutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MATA32TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
