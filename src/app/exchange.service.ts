import {Injectable} from '@angular/core';

@Injectable()
export class ExchangeService {
  exchangeObject: any = {};
  isEditMode: boolean = false;

  constructor() {
  }

  setExchangeObject(exchangeObj) {
    this.exchangeObject = exchangeObj;
  }

  getExchangeObject() {
    this.isEditMode = false;
    return this.exchangeObject;
  }

  getEditMode() {
    return this.isEditMode;
  }

  setEditMode(editMode) {
    this.isEditMode = editMode || false;
    return this.isEditMode;
  }

}
