import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { SaloonDataService } from '../saloon-data.service'

@Component({
  selector: 'app-the-usual',
  templateUrl: './the-usual.component.html',
  styleUrls: ['./the-usual.component.css']
})
export class TheUsualComponent implements OnInit {

  constructor(public saloonDataService:SaloonDataService) { }

  welcomeBackText:string;
  firstName:string=this.saloonDataService.getName();
  theUsualBeverage:string=this.saloonDataService.getSelectedBeverage();
  displayTheUsualButton:boolean=false;
  
  ngOnInit(): void {
  
  
    if (this.theUsualBeverage==null){
      this.welcomeBackText="Welcome back "+this.firstName+". Choose your poison."
    }
    else{
      this.displayTheUsualButton=true;
      this.welcomeBackText="Welcome back "+this.firstName+". Do you want your favorite glass of "+this.theUsualBeverage+" ?"
      
    }
   
  }

//TODO vad ska hända när man klickar på the usual knappen? 
// TODO Den ska ta selectedBeverage från service och ändra på texten i select beverage, det som händer i selectBeverageButton

//Ska jag ha en event emitter och sen skicka this.theUsual till select beverage så den skriver ut det i this.order?
// usual:string;
  theUsualButton(){
    this.displayTheUsualBeverage.emit(this.theUsualBeverage)
    // this.usual=this.saloonDataService.getSelectedBeverage()
    console.log("The usual, the usual button, theusualbeverage som skickas till select beverages är: ", this.displayTheUsualBeverage);
    

  }
 
  @Output()displayTheUsualBeverage=new EventEmitter<string>();

  

}
