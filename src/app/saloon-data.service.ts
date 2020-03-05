import { Injectable } from '@angular/core';
import {Beverage} from './beverage.interface'

@Injectable({
  providedIn: 'root'
})
export class SaloonDataService {

  constructor() { }

  //förnamnet sparas i local storage
  saveFirstName(firstName:string){
    localStorage.setItem('firstName', firstName)
  
  }
  //efternamnet sparas i local storage
  saveLastName(lastName:string){
    localStorage.setItem('lastName', lastName)
  }
    
  //namnet hämtas i local storage
  getName() { return localStorage.getItem('firstName') }

  beveragesDefault:Beverage[]=[
  {name:"Yakmilk"},
  {name:"Non alcoholic water"},
  {name:"Earl Grey hot"}
  ];
  
  
  getBeverages(): Beverage[] { 

    if (localStorage.getItem("beverages")==null || localStorage.getItem("beverages")==undefined){

        localStorage.setItem("beverages", JSON.stringify(this.beveragesDefault))
    }
   
    return JSON.parse(localStorage.getItem("beverages"))
      
  }
    
  getSelectedBeverage(){ 
    return localStorage.getItem("selectedBeverage")
  }
  
  saveSelectedBeverage(selectedBeverage:string){
    
    localStorage.setItem("selectedBeverage",selectedBeverage)
  }
 
  newBeverage;
  
  saveOwnChoice(ownChoise:string){

   //det nya valet sparas i en variabel, newBeverage.
    this.newBeverage = {name:ownChoise};
    
    //det nya valet läggs upp på defaultBeverages i service.
    this.beveragesDefault.push(this.newBeverage);
    
    //det nya valet läggs upp på local storage som en sträng.
    localStorage.setItem("selectedBeverage",this.newBeverage.name)
    
    //den nya uppdaterade listan läggs upp på local storage
    localStorage.setItem("beverages", JSON.stringify(this.beveragesDefault))
   
  }

  emptyLocalStorage(){
    
    localStorage.removeItem('selectedBeverage');
    localStorage.removeItem('firstName');
    localStorage.removeItem('lastName');
    localStorage.removeItem("beverages");

  }

  


 

  
}
