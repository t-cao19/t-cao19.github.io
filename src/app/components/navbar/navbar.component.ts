import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}

  home(): void {
    this.router.navigate(['/home']).then(() => {
      setTimeout(function () {
        window.location.reload();
      }, 100);
    });
  }

  resume(): void {
    this.router.navigate(['/resume']).then(() => {
      setTimeout(function () {
        window.location.reload();
      }, 100);
    });
  }

  projects(): void {
    this.router.navigate(['/projects']).then(() => {
      setTimeout(function () {
        window.location.reload();
      }, 100);
    });
  }

  volunteer(): void {
    this.router.navigate(['/volunteer']).then(() => {
      setTimeout(function () {
        window.location.reload();
      }, 100);
    });
  }
}
