import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { RecipientFormComponent } from './recipient-form/recipient-form.component';
import { OrderDetail } from './../_shared/models/order-detail-model';
import { SenderFormComponent } from './sender-form/sender-form.component';
import { Product } from './../_shared/models/product-model';
import { Component, OnInit, Input, ViewChild, QueryList, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  @Input() selectedProduct: Product;

  @ViewChild('sender')
  private senderComponent: SenderFormComponent;

  @ViewChild('recipient')
  private recipientComponent: RecipientFormComponent;

  @ViewChild('checkoutForm')
  private CheckoutFormComponent: CheckoutFormComponent;

  senderForm: boolean;
  checkOutForm: boolean;
  orderForm: boolean;
  totalOrderedAmount: number;
  orderedQuantity: 1;
  SetDetailsDelegate: any;
  orderDetail: any;

  constructor() {
    this.orderedQuantity = 1;
    this.checkOutForm = false;
    this.orderForm = true;
   }
   ngAfterViewInit(): void{
   }
  ngOnInit(): void {
    this.QuantityChange();
  }

  QuantityChange(): void{
   this.totalOrderedAmount = this.selectedProduct.price *  this.orderedQuantity;
   console.log(this.selectedProduct.price);
   console.log(this.orderedQuantity);
  }

  PlaceOrder(): void{
    const orderDetail = new OrderDetail();
    orderDetail.senderName = this.senderComponent.senderName;
    orderDetail.senderEmail = this.senderComponent.senderEmail;
    orderDetail.senderContactNumber = this.senderComponent.senderContactNum;
    orderDetail.recipientName = this.recipientComponent.name;
    orderDetail.recipientEmail = this.recipientComponent.email;
    orderDetail.recipientContactNumber = this.recipientComponent.contactNum;
    orderDetail.additionalMes = this.recipientComponent.dedication;
    orderDetail.productId = this.selectedProduct.id;
    orderDetail.quantity = this.orderedQuantity;
    orderDetail.totalOrderAmount = this.totalOrderedAmount;
    this.selectedProduct.quantity = this.orderedQuantity;
    this.orderDetail = orderDetail;
    console.log(orderDetail);
    this.checkOutForm = true;
    this.orderForm = false;
  }

  ShowOrderForm(): void{
    this.checkOutForm = false;
    this.orderForm = true;
  }
}
