import { Component, OnInit } from '@angular/core';
import courses from '../../../assets/data/courses.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses: any[];

  constructor() {
    this.courses = courses;
  }

  ngOnInit(): void {}
}
