import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BusinessDataService } from '../business-data.service'
import { businessData } from '../businessData';
import { InputComponent } from '../input/input.component'
import { HttpErrorResponse } from '@angular/common/http';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  businesses : businessData;
  userInput : string;
  requestCode : number;
  httpRequestCodes = {
    400 : "Bad Input",
    502 : "Bad Gateway"
  }

  constructor(private businessService : BusinessDataService, private inputComp : InputComponent) { 
    
  }
  ngOnInit(){
    this.inputComp.getForm().valueChanges.subscribe( value => {this.userInput= value['Location']
    this.businessService.getBusinessData(this.userInput)
      .subscribe(
      data => {this.businesses = <businessData>data.businesses;},
      error => this.requestCode = this.showError(error)
      )
  })
    
  }
  showError(error: HttpErrorResponse): number{
    this.httpRequestCodes[error.status] ? console.log(this.httpRequestCodes[error.status]) : console.log(error.message)
    return error.status
  }

 
}
