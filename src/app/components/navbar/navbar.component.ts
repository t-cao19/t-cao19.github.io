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
    this.router.navigate(['/home']);
  }

  about(): void {
    this.router.navigate(['/now']);
  }

  resume(): void {
    this.router.navigate(['/resume']);
  }

  projects(): void {
    this.router.navigate(['/projects']);
  }

  teaching(): void {
    this.router.navigate(['/teaching']);
  }
}
