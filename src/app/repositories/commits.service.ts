import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repository} from './Commit';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/reduce';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

@Injectable()
export class CommitsService {

  constructor(private httpClient: HttpClient) {
  }

  public getLastCommit(repo: String): Observable<Commit> {
    return this.httpClient.get<Commit>("https://api.github.com/repos/yildiz-online/" + repo + "/branches/develop")
  }
}
