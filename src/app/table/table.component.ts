import { Component, OnInit, Input } from '@angular/core';
import { CommonModule } from '@angular/common'
import { BusinessDataService } from '../business-data.service'
import { businessData } from '../businessData';



@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  businesses : businessData[];
  @Input()
  userInput : string;

  prevInput : string;

  constructor(private businessService : BusinessDataService ) { 
    
  }
  ngOnInit(){
    
  }
  onInputChange(){
    if(this.userInput == this.prevInput) return;
    this.businessService.getBusinessData(this.userInput).subscribe(data => this.businesses = data.businesses);
    this.prevInput = this.userInput;
    
  }

  // getData(){
  //   return this.businesses = [
  //     {"id": 1, "name": "Starbucks", "city": "San Francisco", "rating": 4, "review_count": 5000 },
  //     {"id": 2, "name": "McDonalds", "city": "San Francisco", "rating": 5, "review_count": 34000 },
  //     {"id": 3, "name": "Papa Johns", "city": "San Francisco", "rating": 2, "review_count": 5500 },
  //     {"id": 4, "name": "Togo", "city": "San Francisco", "rating": 3, "review_count": 5900 },
  //     {"id": 5, "name": "Sushi Go", "city": "San Francisco", "rating": 4.5, "review_count": 400 }
  //   ]
  // }
}
