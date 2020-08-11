import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule} from '@angular/common/http';

import { MerchantService } from './_shared/services/merchant.service';
import { MerchantComponent } from './merchant/merchant.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { SenderFormComponent } from './checkout/sender-form/sender-form.component';
import { RecipientFormComponent } from './checkout/recipient-form/recipient-form.component';
import { CheckoutFormComponent } from './checkout/checkout-form/checkout-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MerchantComponent,
    NavbarComponent,
    ProductSelectionComponent,
    CheckoutComponent,
    SenderFormComponent,
    RecipientFormComponent,
    CheckoutFormComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule
  ],
  providers: [MerchantService],
  bootstrap: [AppComponent]
})
export class AppModule { }
