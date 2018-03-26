import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {LoginServiceService} from "./login-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  showLoginError: boolean = false;
  isLoading:boolean  = false;
  username: string = '';
  password: string = '';

  constructor(private router:Router, private loginService:LoginServiceService) {}

  ngOnInit() {}

  login() {
    this.isLoading = true;
    this.loginService.login(this.username, this.password).subscribe(
      (data) => {
        setTimeout(() => {
            this.isLoading = false;
            this.showLoginError = (this.username !== 'demo' && this.password !== 'demo');
            if (!this.showLoginError) this.router.navigate(['/main/start']);
          }, 1000);
      }
    )
  }


}
