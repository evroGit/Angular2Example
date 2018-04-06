import {Component, OnInit} from '@angular/core';
import {LogoutService} from "../../login/logout.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private logout:LogoutService, private router:Router) {
  }

  ngOnInit() {
  }

  onFeedbackClick() {
  }

  onLogoutClick() {
    this.logout.logout();
    this.router.navigate(['/login']);

  }
}
