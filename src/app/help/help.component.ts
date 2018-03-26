import {Component, OnInit} from '@angular/core';
import {GlobalService} from "../global.service";

@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit {
  isButtonSelected1: boolean = true;
  questionsList: string[] = [];
  globalService:any;

  constructor(globalService:GlobalService) {
    this.globalService = globalService;
  }

  ngOnInit() {
    this.fillDummyQuestionsArray();
  }

  //fill dummy questions array
  fillDummyQuestionsArray() {
    for (let i = 1; i <= 5; i++) {
      let qTranslation = "help.QUESTIONS." + i;
      this.questionsList.push(qTranslation);
    }
  }

  onFaqClick() {
    this.isButtonSelected1 = !this.isButtonSelected1;
  }

}
