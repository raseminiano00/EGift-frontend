import { OrderListService } from './_shared/services/order-list.service';
import { ProductSelectionService } from './_shared/services/product-selection.service';
import { NewOrderService } from './_shared/services/new-order.service';
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
import { CheckoutFormComponent } from './checkout/checkout-form/checkout-form.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { OrderListComponent } from './order-list/order-list.component';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { FormErrorComponent } from './_shared/directives/forms/form-error.directive';
import { LoadingScreenComponent } from './loading-screen/loading-screen.component';
import { ErrorResponseComponent } from './error-response/error-response.component';

@NgModule({
  declarations: [
    AppComponent,
    MerchantComponent,
    NavbarComponent,
    ProductSelectionComponent,
    CheckoutComponent,
    CheckoutFormComponent,
    ProductDetailComponent,
    PageNotFoundComponent,
    OrderListComponent,
    OrderDetailComponent,
    FormErrorComponent,
    LoadingScreenComponent,
    ErrorResponseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSliderModule,
    FormsModule,
    ToastrModule.forRoot(),
    NgxPaginationModule
  ],
  providers: [MerchantService, NewOrderService, ProductSelectionService, OrderListService],
  bootstrap: [AppComponent]
})
export class AppModule { }