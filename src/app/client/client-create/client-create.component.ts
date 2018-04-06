import {Component, OnInit, TemplateRef} from '@angular/core';
import {ExchangeService} from "../../exchange.service";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {
  editClient: any;
  editMode: boolean = false;
  modalRef: BsModalRef;

  constructor(private exchangeService: ExchangeService, private ngxModalService: BsModalService) {
  }

  ngOnInit() {
    this.editClient = this.exchangeService.getEditMode() ? this.exchangeService.getExchangeObject() : {};
    this.editMode = (this.editClient['id']) ? true : false;
  }

  showSaveModal(template: TemplateRef<any>, timeoutFlag?:boolean) {
    this.modalRef = this.ngxModalService.show(template, {class: 'modal-sm'});
    if (timeoutFlag) {
      let timeout = 700;
      setTimeout(
        ()=> this.modalRef.hide(),
        timeout
      );
    }
  }

  onSaveClick(template: TemplateRef<any>) {
    if (this.editMode) {
      console.log('edit');
      this.showSaveModal(template, true);
      // this.clientUpdateService.update()
    } else {
      console.log('save');
      this.showSaveModal(template, true);
      // this.clientCreateService.create()
    }

  }


}
