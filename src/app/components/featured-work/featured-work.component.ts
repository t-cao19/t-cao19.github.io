import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-featured-work',
  templateUrl: './featured-work.component.html',
  styleUrls: ['./featured-work.component.scss'],
})
export class FeaturedWorkComponent implements OnInit {
  @Input() work: {
    title: string;
    desc: string;
    imagePath: string;
    link: string;
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate(): void {
    this.router.navigate([this.work.link]);
  }
}
