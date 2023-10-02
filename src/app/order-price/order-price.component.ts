import { Component } from '@angular/core';

@Component({
  selector: 'app-order-price',
  templateUrl: './order-price.component.html',
  styleUrls: ['./order-price.component.scss']
})
export class OrderPriceComponent {
  selectedPrice: any;

  addToCart() {
    // Handle adding the selected price to the cart or perform other actions.
  }
}
