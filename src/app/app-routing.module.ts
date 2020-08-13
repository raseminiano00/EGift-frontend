import { ErrorResponseComponent } from './error-response/error-response.component';
import { OrderDetailComponent } from './order-detail/order-detail.component';
import { OrderListComponent } from './order-list/order-list.component';
import { CheckoutFormComponent } from './checkout/checkout-form/checkout-form.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MerchantComponent } from './merchant/merchant.component';
import { ProductSelectionComponent } from './product-selection/product-selection.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CheckoutComponent } from './checkout/checkout.component';

const routes: Routes = [
  { path: '', redirectTo: 'merchants', pathMatch: 'full' },
  { path: 'merchants', component: MerchantComponent },
  { path: 'merchant/:slug', component: ProductSelectionComponent},
  { path: 'new-order', component: CheckoutComponent},
  { path: 'check-out', component: CheckoutFormComponent},
  { path: 'orders', component: OrderListComponent},
  { path: 'order/:id', component: OrderDetailComponent},
  { path: 'error-page', component: ErrorResponseComponent},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [ProductSelectionComponent,
  MerchantComponent,
  PageNotFoundComponent];
