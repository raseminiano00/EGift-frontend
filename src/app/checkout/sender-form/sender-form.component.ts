import { OrderDetail } from './../../_shared/models/order-detail-model';
import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-sender-form',
  templateUrl: './sender-form.component.html',
  styleUrls: ['./sender-form.component.css']
})
export class SenderFormComponent implements OnInit {

  senderName: string;
  senderEmail: string;
  senderContactNum: number;
  senderDetails: any;
  @ViewChild('senderForm') form: any;
  @Input() orderDetail: OrderDetail;

  constructor() {
    this.orderDetail = new OrderDetail();
  }

  ngOnInit(): void {
  }

  ValidateDetail(): boolean{
    if (this.form.valid){
      return true;
    }
    return false;
  }

  GetSenderDetails(): any{
    return this.orderDetail;
  }

}
