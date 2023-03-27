import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Account } from '../../models/account.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{

  @Input()
  username:string = "";
  password:string = "";
  
  @Output()
  refreshEvent : EventEmitter<any> = new EventEmitter<any>();
  

  userLength:boolean = false;
  passLength:boolean = false;
  notUnique:boolean = false;

  constructor(private authService: AuthService, private router: Router) {}
  
  ngOnInit():void{
    this.authService.getRegisteredUsers().subscribe().unsubscribe();
  }
  
  onSubmit(): void {

    let newUser : Account = {username:this.username, password:this.password, accountCreated:true, loggedIn:false}

    this.authService.getRegisteredUsers().subscribe(data => {
      this.refreshEvent.emit();

      // Validates unique username
      let duplicate = false;
      data.forEach((users) =>{
        console.log(users.username);
        if(newUser.username == users.username){
          this.notUnique = true;
          duplicate = true;
        }
      })

      // Validates username and password length
      if(!duplicate){
        if(this.username.length < 3){
          console.log("user not 3 characters");
          this.userLength = true;
        }
        else if(this.password.length < 6){
          console.log("pass not 6 characters");
          this.passLength = true;
        }
        else{
          this.authService.registerNewUser(newUser).subscribe();
          this.router.navigateByUrl('login');
        } 
      }
        console.log(data);
    });
  }
}