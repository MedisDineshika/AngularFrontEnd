import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Router } from '@angular/router';
@Component({
  selector: 'app-reg-component',
  templateUrl: './reg-component.component.html',
  styleUrls: ['./reg-component.component.css']
})
export class RegComponentComponent implements OnInit {

   customer: Customer = new Customer();
   submitted = false;
  constructor(private customerService: CustomerService,
    private router: Router) { }

  ngOnInit() {
  }

 save() {
    this.customerService.saveCustomer(this.customer)
      .subscribe(data => console.log(data), error => console.log(error));
    this.customer = new Customer();
    
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }
  

  
 
 
 
 

  

}
