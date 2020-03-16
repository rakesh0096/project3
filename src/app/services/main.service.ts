import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http:HttpClient) { }

  getUsers():Observable<any>{
    return this.http.get('http://localhost:3000/user');
  }

  postUsers(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/auth/register',data);
  }

  userslogin(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/auth/login',data);
  }


  getProducts():Observable<any>{
    return this.http.get('http://localhost:3000/all/products');
  }

  

} 
