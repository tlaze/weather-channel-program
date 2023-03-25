import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account.module';


@Injectable({
  providedIn: 'root'
})

export class AuthService {

  constructor(private http: HttpClient) { }
 
  registerNewUser(account: Account): Observable<Account>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Account>("http://127.0.0.1:9000/account", account, {headers:header});
  }
  getRegisteredUsers(): Observable<Account[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Account[]>("http://127.0.0.1:9000/account", {headers:header});
  }
  loginUser(id : number): Observable<Account>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Account>(`http://127.0.0.1:9000/account/${id}`, {loggedIn: true}, {headers:header});
  }
  // getLoginStatus(id: number): Observable<Account>{
  //   let header : HttpHeaders = new HttpHeaders();
  //   header.append("accept", "text/json");
  //   header.append("Access-Control-Allow-Origin", "*");
  //   return this.http.get<Account>(`http://127.0.0.1:9000/account"/${id}`, {headers:header});
  // }
}