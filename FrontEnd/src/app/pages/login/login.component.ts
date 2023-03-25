import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../models/account.module';
import { LoginService } from '../../services/login/login.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  username:string = "";
  password:string = "";
  loggedIn:boolean = false;

  noAccountMessage:boolean = false;

  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit():void {}

  onSubmit(): void{
    let loginData : Account = {username:this.username, password:this.password, loggedIn:this.loggedIn}
    this.loginService.getUserLogin().subscribe(data=>{
      // console.log(data[0].username);
      for(let i = 0; i < data.length; i++){
        // Checks to make sure account username was already registered
        if(data[i].username != loginData.username){
          console.log("not a match");
          this.loginService.loggedIn = false;
          this.noAccountMessage = true;
        }
        else{
          console.log("match");
          this.loginService.loggedIn = true;
          this.router.navigateByUrl('/home');
        }
      }
      console.log("User Data: " + loginData);
    });
  }
}