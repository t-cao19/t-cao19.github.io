import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import * as AOS from 'aos';
import highlights from '../../../assets/data/highlights.json';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  currently: any[];
  previously: any[];

  wordArray: string[];

  constructor() {
    this.wordArray = [
      'Tony Cao ',
      '4th Year U of T Student ',
      'CS + Math Enthusiast ',
      'U of T Teaching Assistant ',
      'Front - End Addict ',
    ];

    this.currently = highlights.slice(0, 3);
    this.previously = highlights.slice(3);
  }

  ngOnInit(): void {
    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }
}
