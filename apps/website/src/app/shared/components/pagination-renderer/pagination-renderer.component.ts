import {
  OnChanges,
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'app-pagination-renderer',
  templateUrl: './pagination-renderer.component.html',
  styleUrls: ['./pagination-renderer.component.css']
})
export class PaginationRendererComponent implements OnInit, OnChanges {
  @Input()
  PageSize = 100;
  @Input()
  TotalRecords = 0;

  @Input()
  currentPage = 0;

  @Output()
  pageSelected = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit() {
    this.updateChanges();
  }

  ngOnChanges() {
    this.updateChanges();
  }

  private updateChanges() {
    const totalPages = Math.ceil(
      (this.TotalRecords > 500 ? 500 : this.TotalRecords) / this.PageSize
    );
    
    this.pages = new Array(totalPages).fill(0).map((v, i) => i);
  }

  private firePageChangeEvt() {
    this.pageSelected.emit(this.currentPage);
  }

  onPageClkd(pageNo: number) {
    this.currentPage = pageNo;
    this.firePageChangeEvt();
  }

  onNextPageClkd() {
    this.currentPage++;
    this.firePageChangeEvt();
  }

  onPrevPageClkd() {
    this.currentPage--;
    this.firePageChangeEvt();
  }
}
