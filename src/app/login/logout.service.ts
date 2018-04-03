import {Injectable} from '@angular/core';
import {UserService} from "./user.service";

@Injectable()
export class LogoutService {

  constructor(private user: UserService) {
  }

  logout() {
    this.user.removeUser();
  };


}
