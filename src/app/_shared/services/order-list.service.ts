import { OrderListDetail } from './../models/orders-model';
import { OrderDetail } from './../models/order-detail-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderListService {

  constructor(private http: HttpClient) { }
  readonly apiUrl = 'https://localhost:44312/api';

  async GetOrders(): Promise<OrderListDetail>{

    const promise: Promise<OrderListDetail> = new Promise((resolve, reject) => {
      return this.http.get<OrderListDetail>(this.apiUrl + '/orders').subscribe(
        response => {
          resolve(response);
      }, error => {
          reject(error);
      });
    });

    return promise;
  }

  GetOrder(orderId: string): Promise<any>{
    const promise: Promise<any> = new Promise((resolve, reject) =>{
      return  this.http.get<any>(this.apiUrl + '/order/' + orderId).subscribe(
        response  => {
            resolve(response);
        },
        error => {
            reject(error);
        }
      );
    });
    return promise;
  }
}
