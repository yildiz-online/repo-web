import {BrowserModule} from '@angular/platform-browser';
import {LOCALE_ID, NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { RouterModule, Routes } from '@angular/router';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';
import localeFrExtra from '@angular/common/locales/extra/fr';


import {AppComponent} from './app.component';
import {RepositoriesService} from './repositories/repositories.service';
import {CommitsService} from './repositories/commits.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SupportersComponent} from './supporters/supporters.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {CarouselComponent} from "./carousel/carousel.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {TutorialComponent} from "./tutorial/tutorial.component";
import {VersionComponent} from "./version/version.component";
import {VersionService} from './version/version.service';
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component';

registerLocaleData(localeFr, 'fr', localeFrExtra);

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
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    RepositoriesService,
    CommitsService,
    VersionService,
    HttpClient,
    { provide: LOCALE_ID, useValue: 'fr' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
