import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  home(): void {
    this.router.navigate(['/home']);
  }

  now(): void {
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
