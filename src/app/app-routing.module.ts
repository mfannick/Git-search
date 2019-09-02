import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PublicRepoComponent } from './components/public-repo/public-repo.component';
import { ReposCompComponent } from './components/repos-comp/repos-comp.component';
import { SearchFormComponent } from './components/search-form/search-form.component';


const routes: Routes = [
  // { path: 'pub', component: PublicRepoComponent},
  { path: 'repos', component: ReposCompComponent},
  { path: 'pub', component: PublicRepoComponent},
  { path: 'repos/:reposit', component: ReposCompComponent},
  { path: '', component: SearchFormComponent},
  { path: '', redirectTo:"/search", pathMatch:"full"},
  { path: 'search-home', component: SearchFormComponent},
  { path: 'search/:user', component: PublicRepoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
