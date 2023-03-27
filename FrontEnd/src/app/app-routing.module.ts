import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { WeatherComponent } from './pages/weather/weather.component';

const routes: Routes = [
  {path: "weather", component : WeatherComponent},
  {path : "home", component : HomeComponent},
  {path : "register", component: RegisterComponent},
  {path : "login", component : LoginComponent},
  {path : "**", component : HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }