import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Search} from './search';
@Injectable({
  providedIn: 'root'
})
export class ServeService {
y:string="http://localhost:8081/bankData"

  constructor(private http:HttpClient) { }
  data():Observable<Search>{
  return this.http.get<Search>(this.y);
  }
}
