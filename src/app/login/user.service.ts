import {Injectable} from '@angular/core';

@Injectable()
export class UserService {

  user = {
    username: '',
    userId: '',
    firstname: '',
    lastname: '',
    session: '',
    lang: '',
    isCacheOn: false
  };
  userOrigData: any;

  constructor() {
    this.userOrigData = {...this.user};
  }

  setUser(userObj: any) {
    for (let key in userObj) {
      if (userObj.hasOwnProperty(key) && this.user.hasOwnProperty(key)) {
        this.user[key] = userObj[key];
      }
    }
  }

  getUser = function () {
    return this.user;
  };

  removeUser() {
    this.user = {...this.userOrigData};
  }

  isLoggedIn = function () {
    return !!(this.getUser().userId !== '' && this.getUser().session !== '');
  };

}
