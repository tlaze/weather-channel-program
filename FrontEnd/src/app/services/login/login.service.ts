import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from '../../models/account.module';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  ngOnInit():void{}

  getUserLogin(): Observable<Account[]>{
    let header : HttpHeaders = new HttpHeaders();
    header.append("accept", "text/json");
    header.append("Access-Control-Allow-Origin", "*");
    return this.http.get<Account[]>("http://127.0.0.1:9000/account", {headers:header});
  }
}

//   getUsers():Observable<Account>{
//     let header : HttpHeaders = new HttpHeaders();
//     header.append("accept", "text/json");
//     header.append("Access-Control-Allow-Origin", "*");
//     return this.http.get<Account>("http://127.0.0.1:9000/account", {headers:header});
//   }
// }
