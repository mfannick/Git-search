import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PublicRepoComponent } from './components/public-repo/public-repo.component';
import { ReposCompComponent } from './components/repos-comp/repos-comp.component';
import { SearchFormComponent } from './components/search-form/search-form.component';
import { FormsModule } from '@angular/forms';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { UnderlineDirective } from './underline.directive';


@NgModule({
  declarations: [
    AppComponent,
    PublicRepoComponent,
    ReposCompComponent,
    SearchFormComponent,
    NavBarComponent,
    UnderlineDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
