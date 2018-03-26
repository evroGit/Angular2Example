import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {
  menuClose: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.menuClose=!this.menuClose;
  }
}
