import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TimelineItem } from '../../components/ngx-vertical-timeline/timeline-item';
import experiences from '../../../assets/data/experience.json';
import * as AOS from 'aos';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  experiences: any[];
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  education: any;

  // For vertical timeline
  items: TimelineItem[] = [];
  externalVariable = 'hello';

  constructor() {
    this.experiences = experiences;
    this.education = {
      employer: '4th Year Student',
      position: '2018 - Present',
      date: 'University of Toronto',
      image: '../../../assets/images/UofT.jpg',
      note: 'CS Specialist & Math Major',
    };
  }

  ngOnInit(): void {
    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      anchorPlacement: 'top-bottom',
    });

    const self = this;

    this.items.push({
      label: 'Action',
      icon: 'fa fa-calendar-plus-o',
      styleClass: 'teste',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title: 'Software Application Developer',
      command() {
        alert(`test: ${self.externalVariable}`);
      },
    });
    this.items.push({
      label: 'Action',
      icon: 'fa fa-calendar-plus-o',
      styleClass: 'teste',
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit,
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
      title: 'Software Application Developer',
      command() {
        alert(`test: ${self.externalVariable}`);
      },
    });

    this.items.push({
      label: 'Action',
      icon: 'fa fa-plus',
      styleClass: 'teste',
      content: `Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat.`,
      title: '11 de November, 2019, 12:00',
      command() {
        alert('Action!');
      },
    });
  }
}
