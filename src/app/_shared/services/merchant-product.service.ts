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

  GetMerchantProducts(merchantSlug: string): Observable<MerchantProducts>{
    return this.http.get<MerchantProducts>(this.apiUrl + '/merchant/' + merchantSlug);
  }
}
