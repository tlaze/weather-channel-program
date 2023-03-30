import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthService } from '../../services/auth.service';
import { Account } from '../../models/account.module';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {


  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );
  hideButton = false;

  constructor(private breakpointObserver: BreakpointObserver, private authService: AuthService) {}

  idAsNumber(id : number | undefined) : number {
    return id as number;
  }

  ifLoggedIn():boolean{
    if(this.authService.isLoggedIn){
      this.authService.isLoggedIn = true;
      this.hideButton = true;
      return this.authService.isLoggedIn;
    }
    else{
      this.hideButton = false;
      return this.authService.isLoggedIn;
    }
  }

    logout():void {
      this.authService.getRegisteredUsers().subscribe(data=>{
        for(let i = 0; i < data.length; i++){
          this.authService.logoutUser(this.idAsNumber(data[i].id)).subscribe(json=>{
            this.authService.isLoggedIn = false;
          });
        }
      });
    }
}
