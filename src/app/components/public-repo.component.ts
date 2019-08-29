import { Component, OnInit } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { SearchClass } from '../classes/search-class';
@Component({
  selector: 'app-public-repo',
  templateUrl: './public-repo.component.html',
  styleUrls: ['./public-repo.component.css']
})
export class PublicRepoComponent implements OnInit {
  // name:string;
  // repo:string;
  searchPro:SearchClass
  
  constructor(private http:HttpClient) { }

  ngOnInit() {
    interface search{
      // name:string;
      public_repos:any;
      login:any;
      avatar_url:any;
    }
    
     return this.http.get<search>('https://api.github.com/users/mfannick').subscribe(data=>{
        this.searchPro=new SearchClass(data.login,data.public_repos,data.avatar_url)
     })
  
  }

}
