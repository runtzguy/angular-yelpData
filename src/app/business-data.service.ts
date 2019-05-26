import { Injectable } from '@angular/core';
import { businessData } from './businessData';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import {Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class BusinessDataService {
  cors: string = "https://cors-anywhere.herokuapp.com/";
  url : string = "https://api.yelp.com/v3/businesses/search?location=";
  

  yelpData;
  constructor(private http: HttpClient) { 
    // let headers : HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer c63UVKrxzMhTRQa7mr2hPKJ_h6ubRK3rh_EbJ3a69CXOBnHovXjkvzPJyM_yhGey0y4iq8ZMfp13Q79jv5tEYCWD2EVJKxcqzbZ0JgRkYiyRkKEMV5CLIqTSfleHXHYx');
    // this.http.get<businessData>(`${this.cors}${this.url}`, {headers} )
    //          .subscribe(response => {this.yelpData = response;});
  }

  getBusinessData(location : string = "San Francisco, California"): Observable<businessData>{
    let headers : HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer c63UVKrxzMhTRQa7mr2hPKJ_h6ubRK3rh_EbJ3a69CXOBnHovXjkvzPJyM_yhGey0y4iq8ZMfp13Q79jv5tEYCWD2EVJKxcqzbZ0JgRkYiyRkKEMV5CLIqTSfleHXHYx');
    return this.http.get<businessData>(`${this.cors}${this.url}${location}`, {headers} )
     
      

    
    // return [
    //       {"id": 1, "name": "Starbucks", "city": "San Francisco", "rating": 4, "review_count": 5000 },
    //       {"id": 2, "name": "McDonalds", "city": "San Francisco", "rating": 5, "review_count": 34000 },
    //       {"id": 3, "name": "Papa Johns", "city": "San Francisco", "rating": 2, "review_count": 5500 },
    //       {"id": 4, "name": "Togo", "city": "San Francisco", "rating": 3, "review_count": 5900 },
    //       {"id": 5, "name": "Sushi Go", "city": "San Francisco", "rating": 4.5, "review_count": 400 }
    //   ]
  }

}