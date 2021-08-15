import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teaching-list',
  templateUrl: './teaching-list.component.html',
  styleUrls: ['./teaching-list.component.scss'],
})
export class TeachingListComponent implements OnInit {
  @Input() teaching: any;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate([this.teaching.webpage]);
  }
}
