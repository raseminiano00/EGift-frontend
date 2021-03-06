import { MerchantService } from './../_shared/services/merchant.service';
import { Component, OnInit, Input } from '@angular/core';
import { Merchants } from '../_shared/models/merchant-model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})

export class MerchantComponent implements OnInit {
  listData: any;
  merchants: any;
  isLoading = true;
  hasError = false;

  constructor(private merchantService: MerchantService , private router: Router) {

  }

  ngOnInit(): void {
    this.refreshMerchantList();
  }

  // tslint:disable-next-line: typedef
  async refreshMerchantList(){
    try{
      const response = await this.merchantService.GetMerchantList();
      this.merchants = response.data;
    }
    catch (err){
      this.hasError = true;
    }
    this.isLoading = false;
  }

  SelectMerchant(merchantSlug: string): void{
    this.router.navigate(['merchant/', merchantSlug]);
  }

}
