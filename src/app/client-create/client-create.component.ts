import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  editClient = {
    id:null,
    firstname: "",
    lastname: "",
    email:""
  };

  constructor() {
  }

  ngOnInit() {
  }

  onSaveClick() {

  }
}
