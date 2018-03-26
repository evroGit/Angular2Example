import {Injectable} from '@angular/core';

@Injectable()
export class GlobalService {

  // constructor() {}

  private _url: string = 'http://localhost:4200';

  getHttpConfigObject = function () {
    let httpConfig = {
      "url": this.url,
      "method": "GET",
      "params": null
    };
    return httpConfig;
  }

  get url(): string {
    return this._url;
  }

  set url(value: string) {
    this._url = value;
  }

}
