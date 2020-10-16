import { Component, OnInit } from '@angular/core';
import works from '../../../assets/data/work.json'

@Component({
  selector: 'app-resume',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.scss']
})
export class ResumeComponent implements OnInit {

  works: any[];

  constructor() { 
    this.works = works;
  }

  ngOnInit(): void {
  }

}
