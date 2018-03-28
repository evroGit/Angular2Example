import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  @Input()  tableStyle?:string = '';
  @Input()  clientData?:any [] = [];



  constructor() { }

  ngOnInit() {
  }

  onDeleteClick(item: any) {

  }

  onEditClick(item: any) {

  }
}
