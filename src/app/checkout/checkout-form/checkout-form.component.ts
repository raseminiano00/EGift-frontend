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

  CheckOut(): void{
    this.isLoading = true;
    this.newOrderService.NewOrder(this.orderDetail).subscribe(data => {

      this.isLoading = false;

      if (data.isSuccess === false){
        this.ShowErrorNotification('Check Out', 'Error on finalizing your order');
        return;
      }

      this.ShowNotification('Check Out', 'Your order has been placed!');

      });
  }

  ShowNotification(title: string, message: string): void {
    this.toastr.success(message, title);
  }

  ShowErrorNotification(title: string, message: string): void {
    this.toastr.error(message, title);
  }
}
