import { OrderDetail } from './../models/order-detail-model';
import { Product } from '../models/product-model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductSelectionService {

  selectedProductInstance: Product;
  selectedMerchantSlug: string;
  selectedProductId: string;
  selectedOrderDetail: any;
  inputOrderDetail: OrderDetail;
  previousPage: string;
  errorMessage: any;

  SetSelectedProduct(product: Product): void{
    this.selectedProductInstance = product;
  }

  SetOrderDetail(orderDetail: OrderDetail): void{
    this.inputOrderDetail = orderDetail;
  }

  SetSelectedOrder(orderDetail: OrderDetail): void{
    this.inputOrderDetail = orderDetail;
  }



  constructor() {
  }


}
