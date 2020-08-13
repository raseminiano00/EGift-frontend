import { ProductSelectionService } from './../_shared/services/product-selection.service';
import { Product } from './../_shared/models/product-model';
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
  apiData: any;
  products: any;
  merchantName: string;
  isLoading = true;

  constructor(private merchantProductService: MerchantProductService, private productSelectService: ProductSelectionService,
              private activatedRouter: ActivatedRoute, private router: Router) {
    this.merchantSlug = this.activatedRouter.snapshot.params.slug;
   }

  ngOnInit(): void {
    this.LoadProducts();
  }

  // tslint:disable-next-line: typedef
  async LoadProducts(){
    try{
      const response = await this.merchantProductService.GetMerchantProducts(this.merchantSlug);
      this.isLoading = false;
      this.products = response.data;
      this.merchantName = response.merchantName;
    }
    catch(err){
      this.router.navigate(['error-page']);
    }
  }

  ToOrder(selectedProduct: Product): void{
    this.productSelectService.SetSelectedProduct(selectedProduct);
    this.productSelectService.selectedMerchantSlug = this.merchantSlug;
    this.router.navigate(['new-order/']);
  }

}
