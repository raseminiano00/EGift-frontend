import { Router } from '@angular/router';
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

  constructor(private router: Router){
  }

  ShowMerchants(): void{
    this.router.navigate(['merchants']);
  }

  ShowOrders(): void{
    this.router.navigate(['orders']);
  }
}