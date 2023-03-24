import { Component, OnInit, Input } from '@angular/core';
import { Account } from '../../models/account.module';
import { LoginService } from '../../services/login/login.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
@Input()
export class LoginComponent implements OnInit {
  
  username:string = "";
  password:string = "";

  constructor(private loginService: LoginService) {}
  
  ngOnInit():void {}

  onSubmit(): void{
    let loginData : Account = {username:this.username, password:this.password}
    this.loginService.getUserLogin().subscribe(data=>{
      console.log(data[0].username);
      console.log(loginData.username);
      for(let i = 0; i < data.length; i++){
        if(data[i].username === loginData.username){
          console.log("match");
        }
      }
    });
  }
  
  reloadPage(): void{
    window.location.reload();
  }
}