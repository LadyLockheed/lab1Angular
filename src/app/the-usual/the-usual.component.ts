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
  firstName:string;
  theUsualBeverage:string;
  displayTheUsualButton:boolean=false;
  
  ngOnInit(): void {
  
    this.firstName=this.saloonDataService.getName();
    this.theUsualBeverage=this.saloonDataService.getSelectedBeverage();
    if (this.theUsualBeverage==null){
      this.welcomeBackText="Welcome back "+this.firstName+". Choose your poison."
    }
    else{
      this.displayTheUsualButton=true;
      this.welcomeBackText="Welcome back "+this.firstName+". Do you want your favorite glass of "+this.theUsualBeverage+" ?"
      
    }
   
  }

  theUsualButton(){
    
    this.displayTheUsualBeverage.emit(this.theUsualBeverage)
    
  }
 
  //skickar till app dialogue, skickas vidare till select beverage
  @Output()displayTheUsualBeverage=new EventEmitter<string>();

  

}
