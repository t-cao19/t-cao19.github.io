import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TimelineItem } from 'src/app/components/ngx-vertical-timeline/timeline-item';
import tutorials from '../../../assets/data/mata32f21-tutorial.json';

@Component({
  selector: 'app-mata32-tutorial',
  templateUrl: './mata32-tutorial.component.html',
  styleUrls: ['./mata32-tutorial.component.scss'],
})
export class MATA32TutorialComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;

  // For vertical timeline
  items: TimelineItem[] = [];

  constructor() {
    for (let i = 0; i < tutorials.length; i++) {
      this.items.push({
        title: 'Week ' + (tutorials.length - i + 1),
        date: tutorials[i].date,
        bullets: tutorials[i].topics,
        label: 'Notes',
        command() {
          if (tutorials[i].notes) {
            window.open(tutorials[i].notes, '_blank').focus();
          } else {
            window.open('/home').focus();
          }
        },
      });
    }
  }

  ngOnInit(): void {}
}
