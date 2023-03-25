import { Component, OnInit} from '@angular/core';
import { RegisterService } from '../../services/register/register.service';
import { Account } from '../../models/account.module';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit{
  username:string = "";
  password:string = "";
  userLength:boolean = false;
  passLength:boolean = false;
  notUnique:boolean = false;

  constructor(private registerService: RegisterService, private router: Router) {}
  
  ngOnInit():void{}


  onSubmit(): void {
    let registeredUsers : Account = {username:this.username, password:this.password}

// gets a list of registered users to check if new account isn't a duplicate
    this.registerService.getRegisteredUsers().subscribe(users => {
      console.log(users);
      
      // If users array is empty, adds first user account to
      if(users.length == 0){
        console.log("null");
        this.registerService.registerUser(registeredUsers).subscribe();
      }

      // console.log("new input:" + this.username);
      // console.log("userdata: " + users[0].username);
      
      for(let i = 0; i < users.length; i++){
        
        if(this.username == users[i].username){
          this.notUnique = true;
          continue;
        }
        else if(this.username.length < 3){
          this.userLength = true;
          continue;
        }
        else if(this.password.length < 6){
          console.log("not 6 characters");
          this.passLength = true;
        }
        else{
          this.registerService.registerUser(registeredUsers).subscribe();
          this.router.navigateByUrl('/login');
        }
      }
    });
  }
}
    


      
      
