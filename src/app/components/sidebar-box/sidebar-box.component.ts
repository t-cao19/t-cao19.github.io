import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidebar-box',
  templateUrl: './sidebar-box.component.html',
  styleUrls: ['./sidebar-box.component.scss'],
})
export class SidebarBoxComponent implements OnInit {
  @Input() category: string;
  @Input() subcategories: string[];
  @Input() length: number;

  checkMap: boolean[] = new Array(length);

  constructor() {}

  ngOnInit(): void {
    for (let i = 0; i < this.length; i++) {
      this.checkMap.push(false);
    }
  }
}
