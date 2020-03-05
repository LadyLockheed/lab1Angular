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
   this.userIsForgotten=false;
  }

  //styr om texten glömt bort ska komma upp
  @Input () userIsForgotten:boolean;
  forgottenUserText:string="----You are no more----"
  
  @Output() forgetUser = new EventEmitter<void>();
  
  emptyLocalStorageButton(){
    
    //anropar funktion som tömmer local storage på allt.
    this.saloonDataService.emptyLocalStorage();
    
    //visar "user är borttagen"-text
    this.userIsForgotten=true;
    
    //Detta skickar ett event enbart, för att visa mottagaren att nånting har hänt. Skickas till app component
    this.forgetUser.emit()
    
    
   
  }

   
    

    



}
