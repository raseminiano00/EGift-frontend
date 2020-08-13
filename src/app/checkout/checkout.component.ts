import { ProductSelectionService } from './../_shared/services/product-selection.service';
import { Router } from '@angular/router';
import { CheckoutFormComponent } from './checkout-form/checkout-form.component';
import { OrderDetail } from './../_shared/models/order-detail-model';
import { Product } from './../_shared/models/product-model';
import { Component, OnInit, Input, ViewChild, QueryList, AfterViewInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit, AfterViewInit {

  selectedProduct: Product;
  senderForm: boolean;
  checkOutForm: boolean;
  orderForm: boolean;
  totalOrderedAmount: number;
  orderedQuantity: number;
  orderDetail: OrderDetail;
  subscription: Subscription;

  constructor(private router: Router, private productSelectService: ProductSelectionService,
              private toastr: ToastrService) {

    this.selectedProduct = this.productSelectService.selectedProductInstance;
    this.orderDetail = this.productSelectService.inputOrderDetail;
    if (this.selectedProduct == null){
      this.router.navigate(['merchants/']);
    }
    if(this.orderDetail == null){
      this.orderDetail = new OrderDetail();
    }
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
   this.totalOrderedAmount = Number(this.selectedProduct.price) *  Number(this.orderedQuantity);
   this.orderDetail.totalOrderAmount = this.totalOrderedAmount;
  }

  PlaceOrder(): void{
    if( this.orderedQuantity <= 0){
      this.toastr.error('Quantity should more than 0', 'Order');
      return;
    }

    this.orderDetail.quantity = this.orderedQuantity;
    this.orderDetail.productId = this.selectedProduct.id;
    this.selectedProduct.quantity = this.orderedQuantity;
    this.productSelectService.SetSelectedProduct(this.selectedProduct);
    this.productSelectService.SetOrderDetail(this.orderDetail);
    this.router.navigate(['check-out']);
  }
  ToProducts(): void{
    this.router.navigate(['merchant/', this.productSelectService.selectedMerchantSlug]);
  }

}
