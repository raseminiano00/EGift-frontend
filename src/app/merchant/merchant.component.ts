import { MerchantService } from './../_shared/services/merchant.service';
import { Component, OnInit, Input } from '@angular/core';
import { Merchants } from '../_shared/models/merchant-model';
import { ParentComponentApi } from '../app.component';

@Component({
  selector: 'app-merchant',
  templateUrl: './merchant.component.html',
  styleUrls: ['./merchant.component.css']
})

export class MerchantComponent implements OnInit {
  listData: any;
  merchants: any;
  @Input() parent: ParentComponentApi;

  constructor(private merchantService: MerchantService ) {

  }

  ngOnInit(): void {
    this.refreshMerchantList();
  }

  refreshMerchantList(): void{
    this.merchantService.GetMerchantList().subscribe(data  => {
      this.listData = data;
      this.merchants = this.listData.data;
      console.log(this.listData.data);
    });
  }

  SelectProduct(merchantSlug: string): void{
    this.parent.parentMethod(merchantSlug);
  }

}
