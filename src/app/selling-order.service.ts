import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class SellingOrderService {
private baseUrl = 'http://localhost:8019/api/v1/bill/{id}';

  constructor(private http: HttpClient) { }

   
  
  getProduct(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }


}
