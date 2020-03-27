import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
@Component({
  selector: 'app-stock-list',
  templateUrl: './stock-list.component.html',
  styleUrls: ['./stock-list.component.css']
})
export class StockListComponent implements OnInit {

  
  
	products: Observable<Product[]>;
   	
  	constructor(private productServiceService: ProductServiceService,
    private router: Router) { }
 ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.products = this.productServiceService.getProductList();
  }

}
