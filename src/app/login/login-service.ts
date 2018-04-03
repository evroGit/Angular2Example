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
    return this.http.get(this.config.url + '/assets/mocks/login-response.json').map(
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
