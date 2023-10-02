import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OrderPriceComponent } from './order-price/order-price.component';
import { PriceTableComponent } from './price-table/price-table.component';
import { SelectPaperSizeComponent } from './select-paper-size/select-paper-size.component';

const routes: Routes = [
  { path: '', redirectTo: '/select-paper-size', pathMatch: 'full' },
  { path: 'select-paper-size', component: SelectPaperSizeComponent },
  { path: 'price-table', component: PriceTableComponent },
  { path: 'order-price', component: OrderPriceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
