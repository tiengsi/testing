import { Component } from '@angular/core';

@Component({
  selector: 'app-select-paper-size',
  templateUrl: './select-paper-size.component.html',
  styleUrls: ['./select-paper-size.component.scss']
})
export class SelectPaperSizeComponent {
  selectedPaperSize: string = 'A4'; // Initialize with a default value
  paperSizes: string[] = ['A4', 'A5', 'B4', 'B5']; // Define your paper sizes here

  applySelection() {
    // You can perform actions when the user clicks "Apply"
    console.log(`Selected Paper Size: ${this.selectedPaperSize}`);
    // You can also trigger actions like fetching price data based on the selected paper size.
    console.log(this.formatNumber(1000000));

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
