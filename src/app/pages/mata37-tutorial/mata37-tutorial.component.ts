import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { TimelineItem } from 'src/app/components/ngx-vertical-timeline/timeline-item';
import tutorials from '../../../assets/data/mata37-tutorial.json';

@Component({
  selector: 'app-mata37-tutorial',
  templateUrl: './mata37-tutorial.component.html',
  styleUrls: ['./mata37-tutorial.component.scss'],
})
export class MATA37TutorialComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  winter21Notes: any[];
  winter22Notes: any[];

  // For vertical timeline
  winter21Timeline: TimelineItem[] = [];
  winter22Timeline: TimelineItem[] = [];

  constructor() {
    this.winter21Notes = [];
    this.winter22Notes = [];

    for (let i = 0; i < tutorials.length; i++) {
      let note = tutorials[i];
      console.log(note);
      if (note.term == 'W21') {
        this.winter21Notes.push(note);
      } else {
        this.winter22Notes.push(note);
      }
    }

    for (let i = 0; i < this.winter21Notes.length; i++) {
      this.winter21Timeline.push({
        title: 'Week ' + (this.winter21Notes.length - i + 1),
        date: this.winter21Notes[i].date,
        bullets: this.winter21Notes[i].topics,
        label: 'Notes',
        command() {
          if (this.winter21Notes[i].notes) {
            window.open(this.winter21Notes[i].notes, '_blank').focus();
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
