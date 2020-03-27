import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveProductComponent } from './save-product/save-product.component';
import { StockListComponent } from './stock-list/stock-list.component';
const routes: Routes = [
{ path: 'addProduct', component:SaveProductComponent},
{ path: 'products', component:StockListComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
