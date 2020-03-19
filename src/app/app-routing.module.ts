import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SaveProductComponent } from './save-product/save-product.component';

const routes: Routes = [
{ path: 'addProduct', component:SaveProductComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
