import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveProductComponent } from './save-product/save-product.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { RegComponentComponent } from './reg-component/reg-component.component';
import { LoginComponent } from './login/login.component';

import { SellingOrderComponent} from './selling-order/selling-order.component';
import { CreateSOrderComponent } from './create-sorder/create-sorder.component';

const routes: Routes = [
{ path: 'addProduct', component:SaveProductComponent},
 { path: 'product/:id', component: SellingOrderComponent},
{ path: 'products', component:StockListComponent},
{ path: 'order', component:CreateSOrderComponent},
{ path: 'addBill', component:GenerateBillComponent},
{ path: 'addCustomer', component:RegComponentComponent},
 {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
