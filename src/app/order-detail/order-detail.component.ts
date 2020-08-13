import { OrderListService } from './../_shared/services/order-list.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductSelectionService } from './../_shared/services/product-selection.service';
import { Product } from './../_shared/models/product-model';
import { OrderDetail } from './../_shared/models/order-detail-model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.css']
})
export class OrderDetailComponent implements OnInit {

  orderDetail: any;
  isLoading = true;
  hasError = false;

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private orderService: OrderListService) {
    this.GetOrderDetailsFromService();
  }

   // tslint:disable-next-line: typedef
   async GetOrderDetailsFromService(){
     try{
        const response = await this.orderService.GetOrder(this.activatedRouter.snapshot.params.id);
        console.log(response);
        this.orderDetail = response.order;
     }
     catch (err){
        this.hasError = true;
     }
     this.isLoading = false;
  }

  ngOnInit(): void {
  }

}
