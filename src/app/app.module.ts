import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppComponent} from './app.component';
import {RepositoriesService} from './repositories/repositories.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {SupportersComponent} from "./supporters/supporters.component";
import {RepositoriesComponent} from "./repositories/repositories.component";
import {CarouselComponent} from "./carousel/carousel.component";

@NgModule({
  declarations: [
    AppComponent,
    RepositoriesComponent,
    SupportersComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule
  ],
  providers: [RepositoriesService, HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }
