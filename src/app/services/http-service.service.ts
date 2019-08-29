import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {
  // userName:string;
  // profilePhoto:string;
  // repositories:string;
  
  constructor(private http:HttpClient) { 
    // console.log('ready')
    // this.userName='mfannick'
  }
  // getHttp(){
  //   return this.http.get('https://api.github.com/users/'+this.userName)
  // }
}
