import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-tutorial-box',
  templateUrl: './tutorial-box.component.html',
  styleUrls: ['./tutorial-box.component.scss']
})
export class TutorialBoxComponent implements OnInit {
  @Input() tutorial: any;

  constructor() { }

  ngOnInit(): void {
  }

}
