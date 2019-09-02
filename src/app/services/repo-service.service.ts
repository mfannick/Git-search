import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repos } from '../classes/repos';

@Injectable({
  providedIn: 'root'
})
export class RepoServiceService {
  // repos:Repos[]=[
  //   new Repos(``,``,``,``)
  // ]
  repos:Repos
  newRepos:any
  
  
  constructor(private http: HttpClient) {
    this.repos=new Repos(``,``,``,new Date())
  
      
    
   }
  repoRequest(myName) {
    interface search2 {
      // name: any;
      // html_url:any;
      // repos_url:any;
      // following:any;
      // followers:any;
      // created_at:any;
       name: string
       html_url: string
       description: string
       created_at: Date
     

      // getHttp(){
      //   return this.http.get('https://api.github.com/users/'+this.userName)
      // }
    }
    let promise = new Promise((resolve, reject) => {
      this.http.get<search2>('https://api.github.com/users/' + myName + '/repos?access_token=' + environment.key).toPromise().then(data => {
        // this.newRepository=data
        this.newRepos=data
        // this.repos.following=data.following
        // this.repos.created_at=data.created_at
        

        resolve()
      },
        error => {
          // this.newRepository="the reponame has a problem"
          // this.repos.repos_url=  "public reposurl has a problem"
          this.newRepos=  "public followers has a problem"

          reject(error)
        })
    })
    return promise
  }
}
