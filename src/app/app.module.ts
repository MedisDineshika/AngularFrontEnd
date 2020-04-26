import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SaveProductComponent } from './save-product/save-product.component';
import { StockListComponent } from './stock-list/stock-list.component';
import { GenerateBillComponent } from './generate-bill/generate-bill.component';
import { RegComponentComponent } from './reg-component/reg-component.component';
import { LoginComponent } from './login/login.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SellingOrderComponent } from './selling-order/selling-order.component';





@NgModule({
  declarations: [
    AppComponent,
    SaveProductComponent,
    StockListComponent,
    GenerateBillComponent,
    RegComponentComponent,
    LoginComponent,
    SellingOrderComponent,
    
    
  ],
  imports: [
  FormsModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
