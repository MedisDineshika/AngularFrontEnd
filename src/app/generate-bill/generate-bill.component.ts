import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Observable } from "rxjs";
@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
  
 
  
})
export class GenerateBillComponent implements OnInit {
  products: Observable<Product[]>;
	 
  product = new Product()
 
 dataarray =[];
  	constructor(private productServiceService: ProductServiceService,
    private router: Router) { }
	
	
	public quantity : number;
	public price : number;
	
	public result : number;
	
	multi(){
	
	this.result = this.quantity * this.price ;
	
	
	
	}
	
	selectedOne : String ="";
	
	
	selectChangeHandler(event : any){
	this.selectedOne = event.target.value ;
	
	
	
	}
  
  ngOnInit() {
  
   this.reloadData();
  this.dataarray.push(this.product);
  }
reloadData() {

	
    this.products = this.productServiceService.getProductList();
   
  }
 addForm(){
 
 this.product = new Product 
 this.dataarray.push(this.product);
 
 }
removeForm(index){
this.dataarray.splice(index);
}
}