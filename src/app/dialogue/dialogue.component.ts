import { Component, OnInit, Input, Output,EventEmitter } from '@angular/core';
import {SaloonDataService} from '../saloon-data.service'
import { TestBed } from '@angular/core/testing';

@Component({
  selector: 'app-dialogue',
  templateUrl: './dialogue.component.html',
  styleUrls: ['./dialogue.component.css']
})
export class DialogueComponent implements OnInit {

  inputFirstName:string;
  inputLastName:string;
  @Input() displayStrangerText:boolean;
  displayNameText:boolean=false;
  welcomeNameText:string;
  displayBeverages:boolean=false;
  displayTheUsual:boolean=false;
  //ev ta bort denna och återanvänd displaystrangertext
  // @Input() forgottenUser:boolean;
  glomdeUser:string="Du tog bort mig!";
  displayChangeNameForm:boolean=false;
  changedFirstName:string;
  changedLastName:string;

  
  ///Här injeceras det som komponenten är beroende av, i detta fall servicefilen
  constructor(public saloonDataService:SaloonDataService) { }
  

  ngOnInit(): void {

    console.log("Allting börjar här!");
    
    //hämtar namn från local storage
    this.inputFirstName=this.saloonDataService.getName();
   
    //visar stranger text och formulär om det ej finns namn i local storage
    if (this.inputFirstName==null){

      this.displayStrangerText=true;
     
    }
    
    //visar välkomsttext och gömmer formulär om det finns namn i local storage
    else{
      
      this.displayStrangerText=false;
      this.displayNameText=true;
      this.displayBeverages=true;
      this.displayTheUsual=true;
      this.displayChangeNameForm=true;
     
    }

  }

  theUsualBeverage:string;
  handleTheUsual(event){
  this.theUsualBeverage=event;
  }
  
  onKeyUpFirstName(event){
    this.inputFirstName=event.target.value;
  }
  onKeyUpLastName(event){
    this.inputLastName=event.target.value;
    
  }
  
  
  //knappen som sparar namnet man skrivit in
  saveNameButton(){
    
    this.displayStrangerText=false;
    this.displayNameText=true;
    this.displayBeverages=true;
    this.displayChangeNameForm=true;
    
    //skriver ut välkomsttext
    this.welcomeNameText=this.inputFirstName;
  
      
    //för att skicka till servicefilen
    this.saloonDataService.saveFirstName(this.inputFirstName)
    this.saloonDataService.saveLastName(this.inputLastName)
    //TODO skicka forgottenuser som false till app component

      this.userLogedIn.emit(this.displayStrangerText)
  }
  //skickas till appcomponent
      @Output() userLogedIn=new EventEmitter<boolean>();

  onKeyUpChangeFirstName(event){
    this.changedFirstName=event.target.value;
  }

  onKeyUpChangeLastName(event){
    this.changedLastName=event.target.value
  }

  saveChangedName(){
    this.saloonDataService.saveFirstName(this.changedFirstName)
    this.saloonDataService.saveLastName(this.changedLastName)
  
   
    //den ändrar namnet i local storage och visar det nya namnet när man uppdaterar sidan, men jag får den inte att uppdatera sig.
    this.inputFirstName=this.saloonDataService.getName();
    //! Håller på att greja här!
    this.welcomeNameText=this.inputFirstName
    // this.welcomeNameText="Alright almighty "+this.inputFirstName+", what can I do you for?"

  }

  
  
  
  




}
