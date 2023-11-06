import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import resume from '../../../assets/data/resume-data.json';
import * as AOS from 'aos';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  education: any;
  resume: any;

  constructor() {
    this.resume = resume;
  }

  ngOnInit(): void {
    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }
}
