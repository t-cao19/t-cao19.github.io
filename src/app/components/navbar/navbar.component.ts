import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;

  // Mobile queries
  isTabletLandscape: boolean;
  isPhoneView: boolean;

  constructor(private router: Router, private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.TabletLandscape).subscribe((result) => {
      this.isTabletLandscape = false;
      if (result.matches) {
        this.isTabletLandscape = true;
      }
    });
  }

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
}
