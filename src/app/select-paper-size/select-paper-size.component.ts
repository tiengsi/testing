import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceTableService } from '../app.service';

@Component({
  selector: 'app-select-paper-size',
  templateUrl: './select-paper-size.component.html',
  styleUrls: ['./select-paper-size.component.scss']
})
export class SelectPaperSizeComponent implements OnInit {
  selectedPaperSize: string = 'A4'; // Initialize with a default value
  paperSizes: string[] = ['A4', 'A5', 'B4', 'B5']; // Define your paper sizes here
  priceData: any;
  @Output() selectValue = new EventEmitter<string>();


  constructor(private priceService: PriceTableService) {}

  ngOnInit(){
    this.selectValue.emit(this.selectedPaperSize);
  }

  applySelection(price: string) {
    this.selectValue.emit(price);
  }

  formatNumber(number: any) {
    if (!Number.isInteger(number) || number < 0) {
      throw new Error('Input must be a positive integer.');
    }

    const numberString = number.toString();
    const parts = [];

    for (let i = numberString.length - 1, j = 0; i >= 0; i--, j++) {
      if (j > 0 && j % 3 === 0) {
        parts.unshift(',');
      }
      parts.unshift(numberString[i]);
    }

    return parts.join('');
  }

}
