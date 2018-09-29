import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';

import {AppComponent} from './app.component';
import {RepositoriesService} from './repositories/repositories.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SupportersComponent} from "./supporters/supporters.component";
import {RepositoriesComponent} from "./repositories/repositories.component";
import {CarouselComponent} from "./carousel/carousel.component";
import {NavigationComponent} from "./navigation/navigation.component";

const appRoutes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'home', component: CarouselComponent },
  { path: 'repositories', component: RepositoriesComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    SupportersComponent,
    CarouselComponent,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RepositoriesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
