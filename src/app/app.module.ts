import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HttpClient, HttpClientModule} from '@angular/common/http';

import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';

import {AppComponent} from './app.component';
import {RepositoriesService} from './repositories/repositories.service';
import {CommitsService} from './repositories/commits.service';
import {SupportersComponent} from './supporters/supporters.component';
import {RepositoriesComponent} from './repositories/repositories.component';
import {CarouselComponent} from "./carousel/carousel.component";
import {NavigationComponent} from "./navigation/navigation.component";
import {TutorialComponent} from "./tutorial/tutorial.component";
import {VersionComponent} from "./version/version.component";
import {VersionService} from './version/version.service';
import {PageNotFoundComponent} from './pageNotFound/pageNotFound.component';

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
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    RouterModule.forRoot(appRoutes, {useHash: true})
  ],
  providers: [
    RepositoriesService,
    CommitsService,
    VersionService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}
