import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

 private baseUrl = 'http://localhost:8011/api/v1/stock';

  constructor(private http: HttpClient) { }

   saveProduct(product: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, product);
  }
  

 
}

