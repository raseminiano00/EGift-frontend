import { OrderDetail } from './../../_shared/models/order-detail-model';
import { Product } from './../../_shared/models/product-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  @Input() selectedProduct: Product;
  @Input() orderDetail: OrderDetail;
  @Output() showOrderForm = new EventEmitter();
  constructor() {
  }

  ngOnInit(): void {
  }
  GoBack(): void{
    this.showOrderForm.emit();
  }
  CheckOut(): void{
    console.log('checkout');
  }
}
