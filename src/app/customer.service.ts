import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8014/api/v1/reg';

  constructor(private http: HttpClient) { }

   saveCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, customer);
  }
  



}
