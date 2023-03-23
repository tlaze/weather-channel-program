import { Component } from '@angular/core';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.css']
})
export class InputsComponent {
  city : String = "";
  state: String = "";
  zip: String = "";
  error:String="";

  submit() : void {
    if (this.zip !== "") {
      console.log("API Request with zip code");
    } else if (this.city !== "" && this.state !== "") {
      console.log("API reqest with city and state");
    } else {
      this.error = "Please fill out the inputs"
    }
  }
}
