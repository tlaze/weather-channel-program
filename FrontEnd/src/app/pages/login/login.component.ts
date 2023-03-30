import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Account } from '../../models/account.module';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  @Input()
  username:string = "";
  password:string = "";

  @Output()
  refreshEvent : EventEmitter<any> = new EventEmitter<any>();


  noAccountMessage:boolean = false;
  noMatchMessage:boolean = false;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit():void {
    this.authService.getRegisteredUsers().subscribe();
  }

  idAsNumber(id : number | undefined) : number {
    return id as number;
  }

  onSubmit(): void{

    this.authService.getRegisteredUsers().subscribe(data =>{
      console.log(data);
      this.refreshEvent.emit()

      // Validates if user input matches an existing account
      for(let i = 0; i < data.length; i++){
        console.log(data[i].username);

        // If user input matches a correct user, changes loggedIn to true
        if(this.username == data[i].username && this.password == data[i].password){
          console.log("account exists");
          console.log(data[i].id);
          this.authService.loginUser(this.idAsNumber(data[i].id)).subscribe( json => {
            this.refreshEvent.emit()
            localStorage.setItem("login", "true")
            this.authService.isLoggedIn = true;
            console.log(json);
            this.router.navigateByUrl('home');
          });
        }

        // Validates if user entered the correct credentials
        else if(this.username == data[i].username || this.password == data[i].password){
          this.noMatchMessage = true;
        }

        // Alerts users if the account isn't registered
        else{
          console.log("account not created");
          this.noAccountMessage = true;
        }
      }
    });
  }
}

