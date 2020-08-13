import { MerchantProducts } from './../models/merchant-product-model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantProductService {

  constructor(private http: HttpClient) { }

  readonly apiUrl = 'https://localhost:44312/api';

  async GetMerchantProducts(merchantSlug: string): Promise<MerchantProducts>{

    const promise: Promise<MerchantProducts> = new Promise((resolve, reject) => {
        return this.http.get<MerchantProducts>(this.apiUrl + '/merchant/' + merchantSlug).subscribe(
          response => {
            resolve(response);
        }, error => {
            reject(error.error);
        });
    });
    return promise;
  }
}
