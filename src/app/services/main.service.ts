import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  constructor(private http:HttpClient) { }
  
  deleteUsers(id:any):Observable<any>{
    return this.http.delete('http://localhost:3000/user/'+id);
  }

  postUsers(data):Observable<any>{
    return this.http.post('http://localhost:3000/auth/register',data);
  }

  getUsers():Observable<any>{
    return this.http.get('http://localhost:3000/user');
  }

  userslogin(data:any):Observable<any>{
    return this.http.post('http://localhost:3000/auth/login',data);
  }

  putUser(id:any,data:any):Observable<any>{
    return this.http.put('http://localhost:3000/user/'+id ,data);
  }

  getProducts():Observable<any>{
    return this.http.get('http://localhost:3000/all/products');
  }

} 
