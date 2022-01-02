import { Component, OnInit, Input } from '@angular/core';
import { TimelineItem } from './timeline-item';

@Component({
  selector: 'app-ngx-vertical-timeline',
  templateUrl: './ngx-vertical-timeline.component.html',
  styleUrls: ['./ngx-vertical-timeline.component.scss'],
})
export class NgxVerticalTimelineComponent implements OnInit {
  list: TimelineItem[] = [];
  constructor() {}

  @Input()
  set items(list: TimelineItem[]) {
    this.list = list;
  }

  ngOnInit() {}

  action(item: TimelineItem) {
    if (item.command) {
      item.command();
    }
  }
}
