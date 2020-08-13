import { ProductSelectionService } from './../_shared/services/product-selection.service';
import { OrderDetail } from './../_shared/models/order-detail-model';
import { OrderListService } from './../_shared/services/order-list.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OrderListDetail } from '../_shared/models/orders-model';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.component.html',
  styleUrls: ['./order-list.component.css']
})
export class OrderListComponent implements OnInit {

  ordersResponse: OrderListDetail;
  ordersLength: string;
  orders: any;
  page = 1;
  itemsPerPage =  3;
  isLoading = true;
  hasError = false;

  constructor(private router: Router, private orderListService: OrderListService,
              private orderSelectionService: ProductSelectionService) { }

  ngOnInit(): void {
    this.RefreshOrderList();
  }

  // tslint:disable-next-line: typedef
  async RefreshOrderList(){
    try{
      const response = await this.orderListService.GetOrders();
      this.orders = response.orders;
      this.ordersLength = this.orders.Length;
    }
    catch (err){
      this.hasError = true;
    }
    this.isLoading = false;
  }

  ShowOrderDetail(orderId: any): void{
    this.router.navigate(['order/', orderId]);
  }

}
