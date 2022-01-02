import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TimelineItem } from '../../components/ngx-vertical-timeline/timeline-item';
import experiences from '../../../assets/data/experience.json';
import resume from '../../../assets/data/resume.json';
import * as AOS from 'aos';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  experiences: any[];
  resume: any[];
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  education: any;

  // For vertical timeline
  items: TimelineItem[] = [];
  externalVariable = 'hello';

  constructor() {
    this.experiences = experiences;
    this.resume = resume;
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

    for (let item of resume) {
      this.items.push({
        label: 'Link',
        icon: 'fa fa-calendar-plus-o',
        styleClass: 'teste',
        content: item.content,
        title: item.title,
        date: item.date,
        command() {
          if (item.link) {
            window.open(item.link, '_blank').focus();
          } else {
            window.open('/home').focus();
          }
        },
      });
    }
  }
}
