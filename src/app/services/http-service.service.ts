import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { SearchClass } from '../classes/search-class'


@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  searchPro: SearchClass
  userName: string;
  myName1:'mfannick'
  // userName='mfannick'
 


  constructor(private http: HttpClient) {

    this.searchPro = new SearchClass( '',``, ``,``,``,new Date(),``,``)
    
  }
  ////////////////////////////////////////////////////////////////////////////////
  profileRequest(userName) {
    interface search {
      login:any;
      public_repos: any;
      avatar_url: any;
      html_url:any
      name:string,
      created_at:Date,
      followers:any ,
      following:any

    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<search>('https://api.github.com/users/'+userName+'?access_token='+environment.key).toPromise().then(response => {
        this.searchPro.login = response.login 
        this.searchPro.public_repos = response.public_repos
        this.searchPro.avatar_url = response.avatar_url
        this.searchPro.html_url=response.html_url
        this.searchPro.name=response.name
        this.searchPro.created_at=response.created_at
        this.searchPro.followers=response.followers
        this.searchPro.following=response.following

        resolve()
      },
        error => {
          this.searchPro.login="the username has a problem"
          this.searchPro.public_repos = "public repos has a problem"
          this.searchPro.avatar_url = "avatar url has a problem"
          this.searchPro.html_url="htmlurl url has a problem"

          reject(error)
        })
    })
    return promise
  }

 
  
}


