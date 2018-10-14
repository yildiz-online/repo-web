import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {RepositoriesService} from './repositories/repositories.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SupportersComponent} from './supporters/supporters.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {CarouselComponent} from "./carousel/carousel.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {TutorialComponent} from "./tutorial/tutorial.component";
import {VersionComponent} from "./version/version.component";
import {VersionService} from './version/version.service';
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component';
import {HashLocationStrategy, LocationStrategy} from "@angular/common";

const appRoutes: Routes = [
  { path: '',             redirectTo: 'home', pathMatch : 'full' },
  { path: 'home',         component: CarouselComponent },
  { path: 'repositories', component: RepositoriesComponent },
  { path: 'tutorial',     component: TutorialComponent },
  { path: '**',           component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    SupportersComponent,
    CarouselComponent,
    NavigationComponent,
    TutorialComponent,
    VersionComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RepositoriesService, VersionService, HttpClient, {provide: HashLocationStrategy, useClass:LocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
