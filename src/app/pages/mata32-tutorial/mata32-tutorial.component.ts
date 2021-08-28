import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-mata32-tutorial',
  templateUrl: './mata32-tutorial.component.html',
  styleUrls: ['./mata32-tutorial.component.scss'],
})
export class MATA32TutorialComponent implements OnInit {
  tutorials: any[];
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;

  constructor() {
    this.tutorials = [];
  }

  ngOnInit(): void {}
}
