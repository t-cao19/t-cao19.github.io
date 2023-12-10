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
  courses: string[];

  // Mobile queries
  isTabletLandscape: boolean;
  isTabletPortrait: boolean;
  isPhoneLandscape: boolean;
  isPhonePortrait: boolean;

  constructor(private responsive: BreakpointObserver) {
    this.resume = resume;
    this.courses = [
      'Engineering Large Software Systems - Head TA, CSCD01, Winter 2023.',
      'Calculus II for Physical Sciences, MATA36, Winter 2023.',
      'Calculus II for Mathematical Sciences, MATA37, Winter 2023.',
      'Discrete Mathematics, CSC/MATA67, Fall 2022.',
      'Introduction to Databases - Head TA, CSCC43, Fall 2022.',
      'Linear Algebra II, MATB24, Fall 2022.',
      'Techniques of the Calculus of Several Variables I, MATB41, Fall 2022.',
      'Groups and Symmetry, MATC01, Fall 2022.',
      'Calculus II for Mathematical Sciences, MATA37, Summer 2022.',
      'Techniques of the Calculus of Several Variables I, MATB41, Summer 2022.',
      'Calculus II for Mathematical Sciences, MATA37, Winter 2022.',
      'Discrete Mathematics, CSC/MATA67, Fall 2021.',
      'Calculus for Management I - Two Tutorials, MATA32, Fall 2021.',
      'Calculus II for Mathematical Sciences, MATA37, Winter 2021.',
    ];
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
