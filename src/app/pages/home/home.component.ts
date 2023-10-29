import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';
import homeData from '../../../assets/data/home-data.json';
import { FormControl, FormGroup } from '@angular/forms';

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

  messageForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    subject: new FormControl(''),
    email: new FormControl(''),
    message: new FormControl(''),
  });

  constructor() {
    this.featuredWork = homeData.featuredWork;
    this.highlight1Pos = 0;
    this.highlight2Pos = this.highlight1Pos + 1;
    this.carouselHighlight = [
      homeData.highlights[this.highlight1Pos],
      homeData.highlights[this.highlight2Pos],
    ];
  }

  ngOnInit(): void {
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

  sendMessage(): void {
    console.log(this.messageForm.value);
  }
}
