import { Component, OnInit } from '@angular/core';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import projects from '../../../assets/data/projects.json';
import * as AOS from 'aos';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss'],
})
export class ProjectsComponent implements OnInit {
  step = 0;
  projects: any[];
  trioProjects: any[];
  faEnvelope = faEnvelope;
  faLinkedinIn = faLinkedinIn;
  faGitHub = faGithub;
  technicalSkills: any[] = [];

  // Mobile queries
  isTabletLandscape: boolean;
  isTabletPortrait: boolean;
  isPhoneLandscape: boolean;
  isPhonePortrait: boolean;

  constructor(private responsive: BreakpointObserver) {
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

    this.trioProjects = projects.reduce((resultArray, item, index) => {
      const chunkIndex = Math.floor(index / 3);
      if (!resultArray[chunkIndex]) {
        resultArray[chunkIndex] = []; // start a new chunk
      }
      resultArray[chunkIndex].push(item);
      return resultArray;
    }, []);

    this.projects = this.trioProjects;
  }

  ngOnInit(): void {
    this.responsive
      .observe(['(orientation: landscape)', Breakpoints.TabletLandscape])
      .subscribe((result) => {
        this.isTabletLandscape = false;
        if (result.matches) {
          this.isTabletLandscape = true;
          this.projects = this.trioProjects;
        }
      });

    this.responsive
      .observe(['(orientation: portrait)', Breakpoints.TabletPortrait])
      .subscribe((result) => {
        this.isTabletPortrait = false;
        if (result.matches) {
          this.isTabletPortrait = true;
          this.projects = projects.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / 2);
            if (!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = []; // start a new chunk
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
          }, []);
        }
      });

    this.responsive
      .observe(Breakpoints.HandsetLandscape)
      .subscribe((result) => {
        this.isPhoneLandscape = false;
        if (result.matches) {
          this.isPhoneLandscape = true;
          this.projects = projects.reduce((resultArray, item, index) => {
            const chunkIndex = Math.floor(index / 2);
            if (!resultArray[chunkIndex]) {
              resultArray[chunkIndex] = []; // start a new chunk
            }
            resultArray[chunkIndex].push(item);
            return resultArray;
          }, []);
        }
      });

    this.responsive.observe(Breakpoints.HandsetPortrait).subscribe((result) => {
      this.isPhonePortrait = false;
      if (result.matches) {
        this.isPhonePortrait = true;
        this.projects = this.trioProjects;
      }
    });

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
