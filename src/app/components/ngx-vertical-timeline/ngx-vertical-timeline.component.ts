import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem } from './timeline-item';
import {
  faSearchPlus,
  faCalendarPlus,
  faUserCircle,
  faUniversity,
  faBriefcase,
  faHandsHelping,
  faChalkboardTeacher,
} from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';

@Component({
  selector: 'app-ngx-vertical-timeline',
  templateUrl: './ngx-vertical-timeline.component.html',
  styleUrls: ['./ngx-vertical-timeline.component.scss'],
})
export class NgxVerticalTimelineComponent implements OnInit {
  list: TimelineItem[] = [];
  constructor() {}

  faSearchPlus = faSearchPlus;
  faCalendarPlus = faCalendarPlus;

  @Input()
  set items(list: TimelineItem[]) {
    this.list = list;
  }

  ngOnInit() {
    AOS.init({
      delay: 300,
      duration: 1500,
      once: true,
      anchorPlacement: 'top-bottom',
    });
  }

  action(item: TimelineItem) {
    if (item.command) {
      item.command();
    }
  }
}
