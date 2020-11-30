import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Home} from './home'
@Injectable({
  providedIn: 'root'
})
export class HomeService {
  url:string="http://localhost:8081/bankData"
  constructor(private http:HttpClient) {

   }

   getBankdata():Observable<Home>{
        return this.http.get<Home>(this.url);
   }
}
