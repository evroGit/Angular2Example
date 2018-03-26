import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {GlobalService} from "../global.service";


@Injectable()
export class LoginServiceService {

  constructor(private config:GlobalService, private http:HttpClient) {}

  login(username: string, password: string) {
    return this.http.get(this.config.url + '/assets/mocks/login-response.json');
    // return this.http.post(this.config.url + '/mocks/login-response.json', {"username":username, "password":password});
  }
}
