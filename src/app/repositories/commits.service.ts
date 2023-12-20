import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Commit} from './Commit';
import {Observable} from 'rxjs';

@Injectable()
export class CommitsService {

  constructor(private httpClient: HttpClient) {
  }

  public getLastCommit(repo: String): Observable<Commit> {
    return this.httpClient.get<Commit>("https://api.github.com/repos/yildiz-online/" + repo + "/branches/develop")
  }
}
