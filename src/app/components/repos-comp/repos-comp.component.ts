import { Component, OnInit } from '@angular/core';
import{Repos} from '../../classes/repos'
import{RepoServiceService} from '../../services/repo-service.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-repos-comp',
  templateUrl: './repos-comp.component.html',
  styleUrls: ['./repos-comp.component.css']
})
export class ReposCompComponent implements OnInit {
  repos:Repos
  // userName='mfannick'
  // githubUser:string
  constructor(private repoServiceService:RepoServiceService,private activatedRoute:ActivatedRoute) { }
//   findUser(user) {
//     this.githubUser = '';
//     this.userName  = user;
//     this.ngOnInit();
// }
// emitSearchs(){
//    this.ngOnInit();

// }

  ngOnInit() {
    let nameRepo=this.activatedRoute.snapshot.paramMap.get('nameRepo')
    this.repoServiceService.repoRequest(nameRepo)
    this.repos=this.repoServiceService.repos
  }

}
