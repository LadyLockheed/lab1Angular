import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import {SaloonDataService} from '../saloon-data.service'
import {Beverage} from '../beverage.interface'

@Component({
  selector: 'app-select-beverage',
  templateUrl: './select-beverage.component.html',
  styleUrls: ['./select-beverage.component.css']
})
export class SelectBeverageComponent implements OnInit {

//TODO selectknappen styr bool som visar eller ej visar "one dricka coming up"
//när property chosenbeverage ändras, den ändras utan att man klickar på selectknapp.
//OM man klickar på the ususal, den ska skicka "the usual beverage" så att @input chosenbeverage ändras till det. 
//men om man ej klickat på selectbev innan så syns ju inte texten även om den ändrats?

  beverages:Beverage[]=[];
  @Input()chosenBeverage:string;

  //TODO Denna används ännu inte. Kanske kan skicka med bool från the usualbutton också för att styra?
  displayBeverages:boolean=true;
  order:string;


 //injecerar från service. saloonDataService kan heta vad som helst. 
  constructor(public saloonDataService:SaloonDataService) { 
   
  }

  ngOnInit(): void {
    
    this.beverages=this.saloonDataService.getBeverages()
   console.log("Select beverages, beverages att välja på är: ", this.beverages);
   
  }

  selectBeverageButton(selectedBeverage: string){
    
    this.chosenBeverage = selectedBeverage;
    console.log("chosen bev", this.chosenBeverage);
    this.order = "One " + this.chosenBeverage + " coming right up!"

   //skickar vald dryck till service
    this.saloonDataService.saveSelectedBeverage(this.chosenBeverage)
    
    // skickar till servicefilen genom funktionen skickar med param.
    // this.dataService.updatedLastBeverage(this.choseBeverage);
  }

  ownChoice:string;

  onKeyUpOwnChoice(event){
    this.ownChoice=event.target.value;
  }

  saveOwnChoiceButton(){
    //använder funktion i service för att spara data.
    this.saloonDataService.saveOwnChoice(this.ownChoice)

    //skriver ut lite roliga grejer
    this.order = "One " + this.ownChoice + " coming right up!"

    //uppdaterar listan med den nya listan i service.
    this.beverages=this.saloonDataService.getBeverages();

  }
  
  
  

}



  