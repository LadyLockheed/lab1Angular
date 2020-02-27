import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  inputFirstName:string;
  inputLastName:string;
  displayStrangerText:boolean=true;
  displayNameText:boolean=false;
  welcomeNameText:string;
  
  onKeyUpFirstName(event){
    this.inputFirstName=event.target.value;
    console.log("input firstname är: "+this.inputFirstName)
  }
  onKeyUpLastName(event){
    this.inputLastName=event.target.value;
    console.log("input lastname är: "+this.inputLastName);
    
  }

  saveNameButton(){

    this.displayStrangerText=false;
    this.displayNameText=true;
    this.welcomeNameText="Alright almighty "+this.inputLastName+", what can I do you for?"

    console.log("Save name button funkar");
    localStorage.setItem('firstName', this.inputFirstName)
    localStorage.setItem('lastName', this.inputLastName)



  
}



}
