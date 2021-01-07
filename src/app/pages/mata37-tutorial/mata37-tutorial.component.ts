import { Component, OnInit } from '@angular/core';
import tutorials from '../../../assets/data/mata37-tutorial.json'

@Component({
  selector: 'app-mata37-tutorial',
  templateUrl: './mata37-tutorial.component.html',
  styleUrls: ['./mata37-tutorial.component.scss']
})
export class MATA37TutorialComponent implements OnInit {

  tutorials: any[];

  constructor() { 
    this.tutorials = tutorials;
  }

  ngOnInit(): void {
  }

}
