import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import {Contact} from './contact';
@Injectable({
  providedIn: 'root'
})
export class ContactUsService {
t:string="http://localhost:8081/bankData";
    constructor(private http:HttpClient) { }

print():Observable<Contact>{
  return this.http.get<Contact>(this.t);
}

}
