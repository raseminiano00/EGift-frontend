import { Product } from './_shared/models/product-model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'EGift';
  MerchantScreen = true;
  ProductSelectionScreen = false;
  OrderFormScreen = false;
  merchantSlug: string;
  selectedProduct: Product;
  getParentApi(): ParentComponentApi {
    return {
      parentMethod: (merchantId) => {
        this.ShowProuctSelection(merchantId);
      }
    }
  }

  OrderFormDelegate(): ParentComponentApi {
    return {
      parentMethod: (product) => {
        this.ShowOrderForm(product);
      }
    }
  }


  ShowMerchants(): void{
    this.MerchantScreen = true;
    this.ProductSelectionScreen = false;
    this.OrderFormScreen = false;
  }

  public ShowProuctSelection(merchantSlug: string): void{
    this.OrderFormScreen = false;
    this.MerchantScreen = false;
    this.ProductSelectionScreen = true;
    this.merchantSlug = merchantSlug;
  }

  public ShowOrderForm(selectedProduct: Product): void{
    this.OrderFormScreen = true;
    this.MerchantScreen = false;
    this.ProductSelectionScreen = false;
    this.selectedProduct = selectedProduct;
  }

}

export interface ParentComponentApi {
  parentMethod: (string) => void;
}
