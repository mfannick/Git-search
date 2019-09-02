import { Component, OnInit, Output,EventEmitter} from '@angular/core';
import { Router } from '@angular/router';
import { HttpServiceService } from 'src/app/services/http-service.service';
import { RepoServiceService } from 'src/app/services/repo-service.service';
import { SearchClass } from 'src/app/classes/search-class';
import { Repos } from 'src/app/classes/repos';



@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent implements OnInit {
  Username:string='mfannick'
  name:string=''
  searchPro:SearchClass
  repos:Repos
  constructor( private router:Router,private httpService:HttpServiceService,private repoServiceService:RepoServiceService) { }
//  @Output() emitSearchs= new EventEmitter<any>()
//  emitSearchs1(){
//    this.searchR()
//    this.searchU()
//  }
// findUser(){
//   this.searchR()
//   this.searchU()
// }

  searchU(){
    this.Username=this.name
    this.router.navigate(['/search',this.name])
    this.httpService.profileRequest(this.name)
    this.searchPro=this.httpService.searchPro
   }
   searchR(){
     this.router.navigate(['/repos',this.name])
     this.repoServiceService.repoRequest(this.name)
     this.repos=this.repoServiceService.repos
   }
  

  ngOnInit() {
  }

}
