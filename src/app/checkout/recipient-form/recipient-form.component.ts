import { OrderDetail } from './../../_shared/models/order-detail-model';
import { Component, OnInit, Input, ViewChild, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-recipient-form',
  templateUrl: './recipient-form.component.html',
  styleUrls: ['./recipient-form.component.css']
})
export class RecipientFormComponent implements OnInit,AfterViewInit {

  name: string;
  email: string;
  contactNum: number;
  dedication: string;
  @Input() orderDetail: OrderDetail;
  @ViewChild('recipientForm') form: any;

  constructor() {
    this.orderDetail = new OrderDetail();
  }

  ngAfterViewInit(): void {
  }

  ngOnInit(): void {
  }

  ValidateDetail(): boolean{
    if (this.form.valid){
      return true;
    }
    return false;
  }

  GetRecipientDetails(): any{
    return this.orderDetail;
  }
}
