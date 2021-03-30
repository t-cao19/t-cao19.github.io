import { Component, OnInit } from '@angular/core';
import tutorials from '../../../assets/data/mata37-tutorial.json'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

@Component({
  selector: 'app-mata37-tutorial',
  templateUrl: './mata37-tutorial.component.html',
  styleUrls: ['./mata37-tutorial.component.scss']
})
export class MATA37TutorialComponent implements OnInit {

  tutorials: any[];
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;

  constructor() { 
    this.tutorials = tutorials;
  }

  ngOnInit(): void {
  }

}
