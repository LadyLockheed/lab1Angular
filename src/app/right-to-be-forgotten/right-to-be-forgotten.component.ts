import { Component, OnInit,Output,Input, EventEmitter } from '@angular/core';
import { SaloonDataService } from '../saloon-data.service'

@Component({
  selector: 'app-right-to-be-forgotten',
  templateUrl: './right-to-be-forgotten.component.html',
  styleUrls: ['./right-to-be-forgotten.component.css']
})
export class RightToBeForgottenComponent implements OnInit {

  constructor(public saloonDataService:SaloonDataService) { }

  ngOnInit(): void {
  }


  forgottenUser:boolean=true;

 
 
  emptyLocalStorageButton(){
    this.saloonDataService.emptyLocalStorage();
    
    //TODO boolean displayStrangerText ska skickas från dialogue hit. 
    //TODO antagligen även boolean för displayBeverages}
    //TODO Ska jag skapa en ny funktion här i där det skapas massa grejer, templates och annat??? OCh sen skicka den istället för booleanen till dialogue????

    //Detta skickar ett event enbart, för att visa mottagaren att nånting har hänt.
    this.forgetUser.emit()
    console.log("från forgotten till app component");
  console.log("forgotten.ForgetUser är: ", this.forgetUser);
   

  }

    @Output() forgetUser = new EventEmitter<void>();
    

    



}
