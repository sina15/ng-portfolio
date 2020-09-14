import { Injectable } from '@angular/core';
import { HttpClient , HttpParams, HttpHeaders} from '@angular/common/http';
import { env } from 'process';
import { BehaviorSubject, Observable ,throwError} from 'rxjs';
import {catchError} from 'rxjs/operators'


const location = {
  longitude:window.localStorage.getItem("longitude"),
  latitude:window.localStorage.getItem("latitude")
}


@Injectable({
  providedIn: 'root'
})
export class HomeSearchService {
 //we pass a default message to the behaviosubject
  messageResource = new BehaviorSubject({})
  currentMessage = this.messageResource.asObservable()

  constructor(private http: HttpClient) { }

  async homeSearch(path: string, searchKey: string, options) {
     
    let param = {...options,item:searchKey,...location}
     let ans = await this.http.get('http://localhost:9090/search',{
       headers:{
         "Application-Type":"application/json",
         "Access-Control-Allow-Origin": "*"
       },
       params:param
     }).pipe(catchError(this.handleError));
     //update the message in the observable
     //ans.subscribe(data=>{console.log(data)},error=>{console.log(error)})
    this.messageResource.next(ans)
  }

  handleError(err){
    return throwError(err.message || 'server error!')
  }
}

export const toQueryString = object =>
  Object.keys(object)
    .map(key => `${key}=${object[key].toString()}`)
    .join('&');
