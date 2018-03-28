import {Component, OnInit} from '@angular/core';
import {ClientServiceService} from './client-service.service';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  clientListLoading = false;
  site: any = {isCacheOn: false};
  searchClient = '';
  clientListArr: any [] = [];

  constructor(private clientService: ClientServiceService) {
  }

  ngOnInit() {
    this.getClientList();
  }

  private getClientList() {
    this.clientListLoading = true;
    this.clientService.getList(1).subscribe(
      response => {
        setTimeout(
          () => {
            this.clientListLoading = false;
            this.clientListArr = response['data'];

          }, 500);
      },
      error => {
        this.clientListLoading = false;
      }
    );
  }

  onEditClick(client: any) {

  }
}
