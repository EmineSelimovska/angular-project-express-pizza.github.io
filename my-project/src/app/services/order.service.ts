import { Injectable } from '@angular/core';
import { Order } from '../shared/models/Order';
import { HttpClient } from '@angular/common/http';
import { ORDER_CREATE_URL, ORDER_NEW_ORDER_URL, Order_PAY_URL } from '../shared/constants/url';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {


constructor(private http: HttpClient) {}
  
  create(order:Order){
    return this.http.post<Order>(ORDER_CREATE_URL, order);
  }

  getNewOrder(): Observable<Order>{
    return this.http.get<Order>(ORDER_NEW_ORDER_URL);
  }
   
  pay(order:Order): Observable<string>{
    return this.http.post<string>(Order_PAY_URL, order);
  }
}
