import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.scss'],
})
export class ResumeExperienceComponent implements OnInit {
  @Input() experience: {
    position: string;
    company: string;
    desc: string[];
    date: string | undefined;
  };

  @Input() inverted: boolean;

  constructor() {}

  ngOnInit(): void {}
}
