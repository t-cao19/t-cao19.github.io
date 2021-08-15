import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import teachings from '../../../assets/data/teaching.json';

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.scss'],
})
export class TeachingComponent implements OnInit {
  teachings: any[];

  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;

  constructor() {
    this.teachings = teachings;
  }

  ngOnInit(): void {}
}
