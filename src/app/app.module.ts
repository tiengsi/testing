import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelectPaperSizeComponent } from './select-paper-size/select-paper-size.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { OrderPriceComponent } from './order-price/order-price.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectPaperSizeComponent,
    PriceTableComponent,
    OrderPriceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
