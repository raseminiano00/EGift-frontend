import { ProductSelectionService } from './../_shared/services/product-selection.service';
import { Product } from './../_shared/models/product-model';
import { ParentComponentApi } from './../app.component';
import { Component, OnInit, Input } from '@angular/core';
import { MerchantProductService } from '../_shared/services/merchant-product.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-product-selection',
  templateUrl: './product-selection.component.html',
  styleUrls: ['./product-selection.component.css']
})
export class ProductSelectionComponent implements OnInit {

  @Input() merchantSlug: string;
  @Input() toOrderForm: ParentComponentApi;
  apiData: any;
  products: any;
  merchantName: string;
  constructor(private merchantProductService: MerchantProductService, private productSelectService: ProductSelectionService,
              private activatedRouter: ActivatedRoute, private router: Router) {
    this.merchantSlug = this.activatedRouter.snapshot.params.slug;
   }

  ngOnInit(): void {
    this.LoadProducts();
  }

  LoadProducts(): void{
    this.merchantProductService.GetMerchantProducts(this.merchantSlug).subscribe(data =>
      {
        this.apiData = data;
        this.products = this.apiData.data;
        this.merchantName = this.apiData.merchantName;
      });
  }

  ToOrder(selectedProduct: Product): void{
    this.productSelectService.SetSelectedProduct(selectedProduct);
    this.router.navigate(['new-order/']);
  }

}
