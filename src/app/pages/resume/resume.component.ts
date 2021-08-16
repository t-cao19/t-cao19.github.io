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
  pdfSrc = '../../../assets/data/Tony Cao - Resume.pdf';

  constructor() {
    this.works = works;
    this.experiences = experiences;
  }

  ngOnInit(): void {}
}
