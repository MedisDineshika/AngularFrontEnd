import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-generate-bill',
  templateUrl: './generate-bill.component.html',
  styleUrls: ['./generate-bill.component.css']
  
 
  
})
export class GenerateBillComponent implements OnInit {

	
	
	
	public Qty : number;
	public price : number;
	
	public result : number;
	
	multi(){
	
	this.result = this.Qty * this.price ;
	
	}
	
	selectedOne : String ="";
	
	
	selectChangeHandler(event : any){
	this.selectedOne = event.target.value ;
	
	
	
	}
  constructor() { }

  ngOnInit(): void {
  }





}
