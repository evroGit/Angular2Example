import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})
export class StartComponent implements OnInit {
  waiting: boolean;

  constructor() {
    this.waiting =  false;
  }

  ngOnInit() {
    // setTimeout(
    //   () => {
    //     this.waiting = false;
    //     console.log("setTimeout");
    //   }, 8000
    // );
  }

  onButtonClick() {
    this.waiting =!this.waiting;
  }
}
