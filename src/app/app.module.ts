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
import {TutorialComponent} from "./tutorial/tutorial.component";
import {VersionComponent} from "./version/version.component";
import {VersionService} from "./version/version.service";

const appRoutes: Routes = [
  { path: '', component: CarouselComponent },
  { path: 'home', component: CarouselComponent },
  { path: 'repositories', component: RepositoriesComponent },
  { path: 'tutorial', component: TutorialComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    SupportersComponent,
    CarouselComponent,
    NavigationComponent,
    TutorialComponent,
    VersionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RepositoriesService, VersionService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
