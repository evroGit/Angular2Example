import {Injectable} from '@angular/core';
import {GlobalService} from "../../global.service";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ClientServiceService {

  constructor(private httpConfig: GlobalService, private http: HttpClient) {
  }

  getList(page) {
    let url =this.httpConfig.url + '/assets/mocks/clientList.json';
    return this.http.get(url);
  }
}
