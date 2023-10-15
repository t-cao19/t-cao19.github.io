import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-projects',
  templateUrl: './featured-projects.component.html',
  styleUrls: ['./featured-projects.component.scss'],
})
export class FeaturedProjectsComponent implements OnInit {
  @Input() project: {
    title: string;
    desc: string;
    imagePath: string;
    link: string;
  };

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(): void {
    this.router.navigate([this.project.link]);
  }
}
