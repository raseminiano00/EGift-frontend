import { OrderDetail } from './../models/order-detail-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class NewOrderService {

  constructor(private http: HttpClient) { }
  readonly apiUrl = 'https://localhost:44312/api';

  NewOrder(orderDetail: OrderDetail): Promise<OrderDetail>{
    const promise = new Promise<OrderDetail>((resolve, reject) => {
      return this.http.post<OrderDetail>(this.apiUrl + '/order', orderDetail).subscribe(response => {
            resolve(response);
        },
        error => {
            reject(error.error);
        }
      );
    });

    return promise;
  }
}
