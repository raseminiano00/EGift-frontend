import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Merchants } from '../models/merchant-model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MerchantService {

  constructor(private http: HttpClient) { }

  readonly apiUrl = 'https://localhost:44312/api';

  GetMerchantList(): Observable<Merchants>{
      return this.http.get<Merchants>(this.apiUrl + '/merchant');
  }
}
