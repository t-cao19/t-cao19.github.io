import { Component, OnInit, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import * as AOS from 'aos';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss'],
})
export class ProjectBoxComponent implements OnInit {
  @Input() project: any;
  faGitHub = faGithub;

  isPhoneLandscape: boolean;
  isPhonePortrait: boolean;

  constructor(private responsive: BreakpointObserver) {}

  ngOnInit(): void {
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
    AOS.init();
  }
}
