import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Product } from '../product';
import { Router } from '@angular/router';


@Component({
  selector: 'app-save-product',
  templateUrl: './save-product.component.html',
  styleUrls: ['./save-product.component.css']
})
export class SaveProductComponent implements OnInit {

 
  

  product: Product = new Product();
   submitted = false;
  constructor(private productServiceService: ProductServiceService,
    private router: Router) { }

  ngOnInit() {
  }

 
 
 
 
 
  save() {
    this.productServiceService.saveProduct(this.product)
      .subscribe(data => console.log(data), error => console.log(error));
    this.product = new Product();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  

  

 

  









}
