import {Component, EventEmitter, Input, OnInit, Output, TemplateRef} from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  // @Input() template: TemplateRef<any>;
  @Input() tableStyle?: string;
  @Input() tableData: any [] = [];
  @Input() pageSize: number = 5;
  @Input() totalCount: number = 0;
  currentTableData: any [] = [];
  currentPage: number = 1;
  pageCount: number = 1;
  startIndex: number = 0;
  endIndex: number = 0;
  pages: number [] = [];

  constructor() { }
  ngOnInit() {}

  ngOnChanges(changes) {
    if (changes.tableData.currentValue) {
      this.totalCount = this.tableData.length;
      this.pageCount = Math.ceil(this.totalCount / this.pageSize);
      this.pages = [...Array(this.pageCount)];
      this.calculatePageArray();
    }
  }

  calculatePageArray() {
    this.startIndex = (this.currentPage - 1) * this.pageSize;
    this.endIndex = Math.min((this.startIndex + this.pageSize - 1), this.totalCount - 1);
    this.currentTableData = this.tableData.slice(this.startIndex, this.endIndex);
  }

  onPagingClick(page) {
    this.currentPage = page;
    this.calculatePageArray();
  }

  @Output() deleteItem = new EventEmitter<any>();
  onDeleteClick(item: any) {
    this.deleteItem.emit(item);
  }

  @Output() editItem = new EventEmitter<any>();
  onEditClick(item: any) {
    this.editItem.emit(item);
  }
}
