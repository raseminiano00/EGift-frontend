import { ProductSelectionService } from './../../_shared/services/product-selection.service';
import { NewOrderService } from './../../_shared/services/new-order.service';
import { OrderDetail } from './../../_shared/models/order-detail-model';
import { Product } from './../../_shared/models/product-model';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-checkout-form',
  templateUrl: './checkout-form.component.html',
  styleUrls: ['./checkout-form.component.css']
})
export class CheckoutFormComponent implements OnInit {

  selectedProduct: Product;
  orderDetail: OrderDetail;
  isLoading = false;
  hasError = false;

  constructor(private newOrderService: NewOrderService, private productSelectService: ProductSelectionService,
              private router: Router, private toastr: ToastrService) {

                this.selectedProduct = this.productSelectService.selectedProductInstance;
                this.orderDetail = this.productSelectService.inputOrderDetail;

                if (this.selectedProduct == null){
                  this.router.navigate(['merchants/']);
                }
  }

  ngOnInit(): void {
  }

  GoBack(): void{
    this.productSelectService.SetSelectedProduct(this.selectedProduct);
    this.productSelectService.SetOrderDetail(this.orderDetail);
    this.router.navigate(['new-order']);
  }

  // tslint:disable-next-line: typedef
  async CheckOut(){
    this.isLoading = true;
    this.orderDetail.quantity = Number(this.orderDetail.quantity);
    this.orderDetail.productDescription = this.selectedProduct.description;
    try{
      const response =  await this.newOrderService.NewOrder(this.orderDetail);
      this.ShowNotification('Check Out', 'Your order has been placed!');
      this.router.navigate(['orders']);
    }
    catch (err){
      this.ShowErrorNotification('Check Out', 'Error on finalizing your order');
      this.hasError = true;
    }
    this.isLoading = false;
  }

  ShowNotification(title: string, message: string): void {
    this.toastr.success(message, title);
  }

  ShowErrorNotification(title: string, message: string): void {
    this.toastr.error(message, title);
  }
}
