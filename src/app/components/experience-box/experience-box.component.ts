import { Component, Input, OnInit } from '@angular/core';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faGlobe } from '@fortawesome/free-solid-svg-icons';
import { Router } from '@angular/router';

@Component({
  selector: 'app-experience-box',
  templateUrl: './experience-box.component.html',
  styleUrls: ['./experience-box.component.scss'],
})
export class ExperienceBoxComponent implements OnInit {
  @Input() experience: any;

  faFacebook = faFacebook;
  faInstagram = faInstagram;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  faGlobe = faGlobe;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  navigate() {
    this.router.navigate([this.experience.link]);
  }
}
