import { Component, OnInit } from '@angular/core';
import { UserLogin } from 'src/app/models/login.module';
import { LoginService } from 'src/app/services/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  username:string = "";
  password:string = "";
  constructor(private loginService : LoginService) {}
  
  ngOnInit():void {}

  login(): void{
    console.log("logged in");
    let user: UserLogin = {username:this.username, password:this.password};
    this.loginService.loginUser(user).subscribe();
  }
}