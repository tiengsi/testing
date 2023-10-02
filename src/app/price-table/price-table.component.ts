import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PriceTableService } from '../app.service';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss'],
})
export class PriceTableComponent {
  // priceData: any[] = []; // Initialize with your price data
  selectedPrice: any;
  selectedIndex: any;
  isShowMore =  false;
  // currentRow = -1;
  // currentCol = -1;

  @Input() priceData: any;
  @Output() currentIndex = new EventEmitter<any>();
  constructor(private priceService: PriceTableService) {

  }

  ngOnInit() {
    // this.selectPrice('A4');


  }


  selectPrice(i: number, j: number) {
    // Handle the selection of a price
    // this.selectedPrice = price;
    // You can perform actions such as highlighting the selected cell and updating the "Order price" section.
    // this.currentRow = i;
    // this.currentCol = j;
    this.selectedIndex = {currentRow: i ,currentCol: j}
    this.currentIndex.emit(this.selectedIndex);
  }

  showMore() {
    this.isShowMore = !this.isShowMore ;
    // Handle the "See More" button click
    // You can expand the table to show all available prices.
  }
}
