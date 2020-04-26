import { Component, OnInit } from '@angular/core';
import { SellingOrderService } from '../selling-Order.service';
import { SellingOrder} from '../selling-Order';

import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from "rxjs";

@Component({
  selector: 'app-selling-order',
  templateUrl: './selling-order.component.html',
  styleUrls: ['./selling-order.component.css']
})
export class SellingOrderComponent implements OnInit {

  id: number;
  sellingOrder: SellingOrder;

  constructor(private route: ActivatedRoute,private router: Router,
    private sellingOrderService: SellingOrderService) { }

  ngOnInit() {
    this.sellingOrder = new SellingOrder();

    this.id = this.route.snapshot.params['id'];
    
    this.sellingOrderService.getProduct(this.id)
      .subscribe(data => {
        console.log(data)
        this.sellingOrder = data;
      }, error => console.log(error));
  }

}
