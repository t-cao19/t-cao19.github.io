import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import projects from '../../../assets/data/projects.json';
import * as AOS from 'aos';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  step = 0;
  projects: any[];
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  technicalSkills: any[] = [];

  constructor() {
    this.technicalSkills = [
      {
        id: 'row-1',
        skill: ['Angular', 'React', 'Git/GitHub', 'HTML'],
      },
      {
        id: 'row-2',
        skill: ['CSS', 'NodeJS', 'Express', 'JavaScript'],
      },
      {
        id: 'row-3',
        skill: ['TypeScript', 'Python', 'ElectionJS', 'PostgreSQL'],
      },
      {
        id: 'row-4',
        skill: ['MongoDB', 'C', 'Android', 'Java'],
      },
    ];

    this.projects = projects.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 3);

      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }

      resultArray[chunkIndex].push(item);

      return resultArray;
    }, []);
  }

  ngOnInit(): void {
    AOS.init({
      delay: 200,
      duration: 1500,
      once: false,
      anchorPlacement: 'top-bottom',
    });
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}
