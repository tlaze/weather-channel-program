import { Component, OnInit, Input } from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Account } from '../../models/account.module';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
@Input()
export class RegisterComponent implements OnInit{
  username:string = "";
  password:string = "";


  constructor(private registerService: RegisterService) {}

  ngOnInit():void{}

  onSubmit(): void {

    let registerData : Account = {username:this.username, password:this.password}
    this.registerService.registerUser(registerData).subscribe(data => {
        console.log(data);
    });
  }
}
