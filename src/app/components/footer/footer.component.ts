import { Component, OnInit } from '@angular/core';
import {
  faLinkedin,
  faGithub,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  faLinkedin = faLinkedin;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;

  // Mobile queries
  isTabletLandscape: boolean;
  isTabletPortrait: boolean;
  isPhoneView: boolean;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
    this.responsive.observe(Breakpoints.TabletLandscape).subscribe((result) => {
      this.isTabletLandscape = false;
      if (result.matches) {
        this.isTabletLandscape = true;
      }
    });

    this.responsive.observe(Breakpoints.TabletPortrait).subscribe((result) => {
      this.isTabletPortrait = false;
      if (result.matches) {
        this.isTabletPortrait = true;
      }
    });
  }
}
