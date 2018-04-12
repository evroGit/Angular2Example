import {Component, OnInit, TemplateRef} from '@angular/core';
import {LogoutService} from "../../login/logout.service";
import {Router} from "@angular/router";
import {BsModalRef, BsModalService} from "ngx-bootstrap";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  modalRef: BsModalRef;
  feedback = {
    "subject":"",
    "body":""
  };
  constructor(private logout: LogoutService, private router: Router, private ngxModalService: BsModalService) {
  }


  ok() {
    this.ngxModalService.setDismissReason("ok");
    this.modalRef.hide();
  }

  cancel() {
    this.ngxModalService.setDismissReason("cancel");
    this.modalRef.hide();
  }

  onFeedbackClick(template: TemplateRef<any>) {
    this.modalRef = this.ngxModalService.show(template, {class: 'modal-sm'});
    //if modal opens, thens subscribe, take first and unsubscribe
    this.ngxModalService.onHide.take(1).subscribe((reason: string) => {
    });
  };

  onLogoutClick() {
    this.logout.logout();
    this.router.navigate(['/login']);

  }
}
