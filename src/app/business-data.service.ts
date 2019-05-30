import { Injectable } from '@angular/core';
import { businessData } from './businessData';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http'
import {Observable, throwError} from 'rxjs'
import { catchError } from 'rxjs/operators';

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
    //          .subscribe(response => {this.yelpng Data = response;});
  }

  getBusinessData(location : string = "San Francisco, California"): Observable<any>{
    let headers : HttpHeaders = new HttpHeaders().set('Authorization', 'Bearer c63UVKrxzMhTRQa7mr2hPKJ_h6ubRK3rh_EbJ3a69CXOBnHovXjkvzPJyM_yhGey0y4iq8ZMfp13Q79jv5tEYCWD2EVJKxcqzbZ0JgRkYiyRkKEMV5CLIqTSfleHXHYx');
    return this.http.get<businessData>(`${this.cors}${this.url}${location}`, {headers} )
            .pipe(catchError(this.handleError));
  }
  handleError(errorRep : HttpErrorResponse){
    return throwError(errorRep|| "Server Error")
  }
}