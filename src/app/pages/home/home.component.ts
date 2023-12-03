import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';
import homeData from '../../../assets/data/home-data.json';
import { FormControl, FormGroup } from '@angular/forms';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  featuredWork: any[];
  wordArray: string[];
  carouselHighlight: any[];
  highlight1Pos: number;
  highlight2Pos: number;
  mailText: string;

  // Mobile queries
  isTabletLandscape: boolean;
  isTabletPortrait: boolean;
  isPhoneView: boolean;

  messageForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    subject: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor(private responsive: BreakpointObserver) {
    this.featuredWork = homeData.featuredWork;
    this.highlight1Pos = 0;
    this.highlight2Pos = this.highlight1Pos + 1;
    this.carouselHighlight = [
      homeData.highlights[this.highlight1Pos],
      homeData.highlights[this.highlight2Pos],
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

    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }

  nextArrow(): void {
    this.highlight1Pos = this.highlight2Pos;
    this.highlight2Pos =
      this.highlight2Pos + 1 < homeData.highlights.length
        ? this.highlight2Pos + 1
        : 0;
    this.carouselHighlight = [
      homeData.highlights[this.highlight1Pos],
      homeData.highlights[this.highlight2Pos],
    ];
  }

  prevArrow(): void {
    this.highlight2Pos = this.highlight1Pos;
    this.highlight1Pos =
      this.highlight1Pos - 1 > -1
        ? this.highlight2Pos - 1
        : homeData.highlights.length - 1;
    this.carouselHighlight = [
      homeData.highlights[this.highlight1Pos],
      homeData.highlights[this.highlight2Pos],
    ];
  }

  // sendMessage(): void {
  //   this.mailText = `mailto:tony.cao1@outlook.com?subject=${this.messageForm.value.subject}&body=${this.messageForm.value.message}`;
  //   window.location.href = this.mailText;
  // }
}
