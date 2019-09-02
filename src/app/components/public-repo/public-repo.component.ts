import { Component, OnInit } from '@angular/core';
import { SearchClass } from '../../classes/search-class';
import{HttpServiceService} from '../../services/http-service.service'
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-public-repo',
  templateUrl: './public-repo.component.html',
  styleUrls: ['./public-repo.component.css']
})
export class PublicRepoComponent implements OnInit {
  searchPro:SearchClass
  // userName:'mfannick'

//   findUser(user) {
//     this.gitUser = '';
//     this.userName  = user;
//     this.ngOnInit();
// }
  
  constructor(private httpService:HttpServiceService,private activatedRoute:ActivatedRoute) { }
  // emitSearchs(){
  //   this.ngOnInit();
  // }

  ngOnInit() {
    let namePub=this.activatedRoute.snapshot.paramMap.get('namePub')
    this.httpService.profileRequest(namePub)
    this.searchPro = this.httpService.searchPro
   
  
  }

}
