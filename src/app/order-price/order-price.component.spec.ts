import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPriceComponent } from './order-price.component';

describe('OrderPriceComponent', () => {
  let component: OrderPriceComponent;
  let fixture: ComponentFixture<OrderPriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderPriceComponent]
    });
    fixture = TestBed.createComponent(OrderPriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
