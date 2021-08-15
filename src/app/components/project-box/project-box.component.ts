import { Component, OnInit, Input } from '@angular/core';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-project-box',
  templateUrl: './project-box.component.html',
  styleUrls: ['./project-box.component.scss'],
})
export class ProjectBoxComponent implements OnInit {
  @Input() project: any;
  faGitHub = faGithub;

  constructor() {}

  ngOnInit(): void {}
}
