import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "./login-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoginError: boolean = false;
  isLoading:boolean  = false;
  username: string = 'demo';
  password: string = 'demo';

  constructor(private router:Router, private loginService:LoginService) {}

  ngOnInit() {}

  login() {
    this.isLoading = true;
    this.loginService.login(this.username, this.password).subscribe(
      (data) => {
        setTimeout(() => {
            this.isLoading = false;
            this.showLoginError = false;
            this.router.navigate(['/main/start']);
          }, 1000);
      },
      (error) => {
        this.isLoading = false;
        this.showLoginError = true;
      }
    );
  }


}
