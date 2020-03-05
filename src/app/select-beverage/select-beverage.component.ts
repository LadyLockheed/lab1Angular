import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {SaloonDataService} from '../saloon-data.service'
import {Beverage} from '../beverage.interface'

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {

  beverages:Beverage[]=[];
  @Input()chosenBeverage:string;
  ownChoice:string;
 
  //injecerar från service. saloonDataService kan heta vad som helst. 
  constructor(public saloonDataService:SaloonDataService) { }

  ngOnInit(): void { 
    //hämtar dryckeslistan från service
    this.beverages=this.saloonDataService.getBeverages()
  }

  selectBeverageButton(selectedBeverage: string){
    
    //sätter om chosen till det man skrivit in.
    this.chosenBeverage = selectedBeverage;
    
     //skickar vald dryck till service
    this.saloonDataService.saveSelectedBeverage(this.chosenBeverage)
    
  }

  onKeyUpOwnChoice(event){
    this.ownChoice=event.target.value;
  }

  saveOwnChoiceButton(){

    //sätter om chosen till det man skrivit in
    this.chosenBeverage = this.ownChoice;

    //använder funktion i service för att spara data.
    this.saloonDataService.saveOwnChoice(this.ownChoice)
    
    //uppdaterar listan med den nya listan i service.
    this.beverages=this.saloonDataService.getBeverages();

  }
  
}



  