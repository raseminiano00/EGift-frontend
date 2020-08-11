import { OrderDetail } from './../models/order-detail-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NewOrderService {

  constructor(private http: HttpClient) { }
  readonly apiUrl = 'https://localhost:44312/api';

  GetMerchantList(orderDetail: OrderDetail): Observable<OrderDetail>{
      return this.http.post<OrderDetail>(this.apiUrl + '/order',
      { orderDetail});
  }
}
