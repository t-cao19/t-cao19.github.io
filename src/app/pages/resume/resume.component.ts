import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import resume from '../../../assets/data/resume-data.json';
import * as AOS from 'aos';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss'],
})
export class ResumeComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  education: any;
  resume: any;

  // Mobile queries
  isTabletLandscape: boolean;
  isTabletPortrait: boolean;
  isPhoneLandscape: boolean;
  isPhonePortrait: boolean;

  constructor(private responsive: BreakpointObserver) {
    this.resume = resume;
  }

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

    this.responsive
      .observe(Breakpoints.HandsetLandscape)
      .subscribe((result) => {
        this.isPhoneLandscape = false;
        if (result.matches) {
          this.isPhoneLandscape = true;
        }
      });

    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;
      if (result.matches) {
        this.isPhonePortrait = true;
      }
    });

    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'center',
      inline: 'nearest',
    });
  }
}
