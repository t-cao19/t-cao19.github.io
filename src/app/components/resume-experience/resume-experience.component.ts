import { Component, OnInit, Input } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-resume-experience',
  templateUrl: './resume-experience.component.html',
  styleUrls: ['./resume-experience.component.scss'],
})
export class ResumeExperienceComponent implements OnInit {
  @Input() experience: {
    position: string;
    company: string;
    desc: string[];
    date: string | undefined;
  };

  @Input() inverted: boolean;

  // Mobile queries
  isTabletLandscape: boolean;
  isTabletPortrait: boolean;
  isPhoneLandscape: boolean;
  isPhonePortrait: boolean;

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
  }
}
