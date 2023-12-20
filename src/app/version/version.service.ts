import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Version} from "./Version";

@Injectable()
export class VersionService {

  constructor(private httpClient: HttpClient) {
  }

  public getVersion(): Observable<Version> {
    return this.httpClient.get<Version>("./assets/version");
  }

}
