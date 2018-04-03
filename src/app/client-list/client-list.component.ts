import {Component, OnInit, TemplateRef} from '@angular/core';
import {ClientServiceService} from './client-service.service';
import {Subscription} from "rxjs/Subscription";
import {BsModalService} from "ngx-bootstrap/modal";
import {BsModalRef} from "ngx-bootstrap/modal";
import {ok} from "assert";
import "rxjs/add/operator/take";

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css']
})
export class ClientListComponent implements OnInit {
  modalRef: BsModalRef;
  subscription: Subscription;
  clientListLoading = false;
  site: any = {isCacheOn: false};
  searchClient = '';
  clientListArr: any [] = [];
  totalCount: number = 0;

  constructor(private clientService: ClientServiceService, private ngxModalService:BsModalService) {
  }

  ngOnInit() {
    this.getClientList();
  }

  private getClientList() {
    this.clientListLoading = true;
    if (this.clientListArr.length === 0) {
      this.subscription = this.clientService.getList(1).subscribe(
        response => {
          setTimeout(
            () => {
              this.clientListLoading = false;
              this.clientListArr = response['data'];
              this.totalCount = this.clientListArr.length;
            }, 500);
        },
        error => {
          this.clientListLoading = false;
        }
      );
    } else {
      this.clientListLoading = false;
      this.clientListArr = this.clientListArr.slice(0, this.clientListArr.length); //reassign array with its copy
      this.totalCount = this.clientListArr.length;
    }

  }

  onEditClick(client: any) {
    // exchangeService.setEditMode(true);
    // exchangeService.setExchangeObject(item);
    // $state.go("app.clientEdit");
  }


  ok(){
    this.ngxModalService.setDismissReason("ok");
    this.modalRef.hide();
  }

  cancel () {
    this.ngxModalService.setDismissReason("cancel");
    this.modalRef.hide();
  }


  onDeleteClick (client: any, template: TemplateRef<any>) {
    //helper function to find index for deleting client
    let tmpClientIndex = ((clientId) => {
      if (clientId) {
        for (let i in this.clientListArr)
          if (this.clientListArr[i].id === clientId) {
            return i;
          }
      }
      return null;
    })(client["id"]);

    this.modalRef = this.ngxModalService.show(template, {class: 'modal-sm'});
    this.ngxModalService.onHide.take(1).subscribe((reason: string) => {
      if (reason === 'ok') {
        if (tmpClientIndex !==null) {
          this.clientListArr.splice(Number(tmpClientIndex), 1);
          this.getClientList();
        }
      }
    });







    // modalMessageService.showModalMessage(
    //   "page.WARNING",
    //   "page.DELETE_DATA_QUESTION",
    //   "",
    //   null,
    //   {showCancel: true},
    //   function () {
    //     let tmpClientIndex = ((clientId) => {
    //       if (clientId) {
    //         for (let i in this.clientListArr)
    //           if (this.clientListArr[i].id === clientId) { return i }
    //       }
    //       return null;
    //     })(item["id"]);
    //
    //     this.clientListArr.splice(tmpClientIndex, 1);
    //     this.getClientList();
    //   }
    // );
  };

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


}
