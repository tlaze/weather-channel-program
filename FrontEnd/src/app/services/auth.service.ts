import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../models/account.module';


@Injectable({
  providedIn: 'root'
})

export class AuthService {
  isLoggedIn:boolean = false;
  loginID:number = 0;

  constructor(private http: HttpClient) { 
    this.isLoggedIn = localStorage.getItem('login') as unknown as boolean
    this.loginID = localStorage.getItem('login') as unknown as number
  }

  registerNewUser(account: Account): Observable<Account>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.post<Account>("http://3.101.34.132:9000/account", account, {headers:header});
  }
  getRegisteredUsers(): Observable<Account[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Account[]>("http://3.101.34.132:9000/account", {headers:header});
  }
  loginUser(id : number): Observable<Account>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Account>(`http://3.101.34.132:9000/account/${id}`, {loggedIn: true}, {headers:header});
  }
  logoutUser(id : number): Observable<Account>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.patch<Account>(`http://3.101.34.132:9000/account/${id}`, {loggedIn: false}, {headers:header});
  }

}
