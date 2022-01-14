import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TimelineItem } from 'src/app/components/ngx-vertical-timeline/timeline-item';
import tutorialsW21 from '../../../assets/data/mata37w21-tutorial.json';

@Component({
  selector: 'app-mata37-tutorial',
  templateUrl: './mata37-tutorial.component.html',
  styleUrls: ['./mata37-tutorial.component.scss'],
})
export class MATA37TutorialComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;

  // For vertical timeline
  winter21Timeline: TimelineItem[] = [];
  winter22Timeline: TimelineItem[] = [];

  constructor() {
    for (let i = 0; i < tutorialsW21.length; i++) {
      this.winter21Timeline.push({
        title: 'Week ' + (tutorialsW21.length - i + 1),
        date: tutorialsW21[i].date,
        bullets: tutorialsW21[i].topics,
        label: 'Notes',
        command() {
          if (tutorialsW21[i].notes) {
            window.open(tutorialsW21[i].notes, '_blank').focus();
          } else {
            window.open('/home').focus();
          }
        },
      });
    }
  }

  ngOnInit(): void {}

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'nearest',
    });
  }
}
