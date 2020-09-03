import { Component, OnInit } from '@angular/core';
import courses from '../../../assets/data/courses.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  courses: any[];
  slides: any[];

  constructor() {
    this.courses = courses;
  }

  ngOnInit(): void {
    this.slides = [
      {
        src:
          'https://images.unsplash.com/photo-1567653418876-5bb0e566e1c2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
      },
      {
        src:
          'https://images.unsplash.com/photo-1538426455889-1311ea3dad57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
      },
      {
        src:
          'https://images.unsplash.com/photo-1551410224-699683e15636?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80',
      },
    ];
  }
}
