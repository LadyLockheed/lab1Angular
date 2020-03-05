import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lab1Angular';


userLogedIn(){
  this.forgottenUser=false;
}


  forgottenUser;
  handleForgetUser(){

    console.log("från forgotten till app component är forgetuser: ", this.forgottenUser);
    this.forgottenUser=true;
    console.log("från appcomponent till dialogue: ", this.forgottenUser);
  
  }



}

