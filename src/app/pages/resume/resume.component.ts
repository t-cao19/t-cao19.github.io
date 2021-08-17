import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import works from '../../../assets/data/work.json';
import experiences from '../../../assets/data/experience.json';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  works: any[];
  experiences: any[];
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  education: any;

  constructor() {
    this.works = works;
    this.experiences = experiences;
    this.education = {
      employer: '4th Year Student',
      position: '2018 - Present',
      date: 'University of Toronto',
      image: '../../../assets/images/UofT.jpg',
      note: 'CS Specialist & Math Major',
    };
  }

  ngOnInit(): void {}
}
