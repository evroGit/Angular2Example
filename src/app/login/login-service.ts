import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from "../global.service";
import {UserService} from "./user.service";
import {Observable} from "rxjs/Observable";


@Injectable()
export class LoginService {

  constructor(private config: GlobalService, private http: HttpClient, private user: UserService) {
  }

  login(username: string, password: string) {
    let url = this.config.url + '/assets/mocks/login-response.json';
    return this.http.get(url).map(
      (response) => {
        if (username === 'demo' && password === 'demo') {
          this.user.setUser(response);
        } else {
          throw Observable.throw(response);
        }
      }
    );
  }
}
