import { Component } from '@angular/core';
import { PriceTableService } from './app.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'price-table-app';
  priceData: any;
  selectedIndex: any;
  constructor(private priceService: PriceTableService) {}


  getPrice(e: string){
    console.log(e);
    this.priceService.getPrice(e).subscribe((response) => {
      console.log(response);
      this.priceData = response;
    });
  }

  currentIndex(e: object){
    console.log(e);
    this.selectedIndex = e;

  }


}
