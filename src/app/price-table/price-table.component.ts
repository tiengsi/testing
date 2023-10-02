import { Component } from '@angular/core';

@Component({
  selector: 'app-price-table',
  templateUrl: './price-table.component.html',
  styleUrls: ['./price-table.component.scss']
})
export class PriceTableComponent {
  priceData: any[] = []; // Initialize with your price data
  selectedPrice: any;

  selectPrice(price: any) {
    // Handle the selection of a price
    this.selectedPrice = price;
    // You can perform actions such as highlighting the selected cell and updating the "Order price" section.
  }

  showMore() {
    // Handle the "See More" button click
    // You can expand the table to show all available prices.
  }
}
