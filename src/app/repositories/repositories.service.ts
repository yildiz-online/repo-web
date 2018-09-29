import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repository} from './Repository';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/expand';
import 'rxjs/add/operator/reduce';
import {EmptyObservable} from 'rxjs/observable/EmptyObservable';

@Injectable()
export class RepositoriesService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllRepo(): Observable<Repository[]> {
    return Observable.create(observer => {
      this.getPage('https://api.github.com/users/yildiz-online/repos?page=1')
        .expand((data, i) => {
          return data.next ? this.getPage(data.next) : EmptyObservable.create();
        })
        .map(data => data.result)
        .reduce((acc, data) => {
          return acc.concat(data);
        }, [])
        .subscribe((repo) => {
          observer.next(repo);
        });
    });
  }

  private getPage(url: string): Observable<{ next: string, result: Repository[] }> {
    return this.httpClient.get<Repository[]>(url, {observe: 'response'})
      .map(response => {
        const link = response.headers.get('Link');
        return {
          next: this.getNextUrl(link),
          result: response.body
        };
      });
  }

  private getNextUrl(linkHeader: string): string {
    if (linkHeader.indexOf('next') === -1) {
      return null;
    }
    const links = linkHeader.split(',');
    for (const link of links) {
      const values = link.split('; ');
      if (values[1].indexOf('rel="next"') !== -1) {
        return values[0]
          .replace('<', '')
          .replace('>', '');
      }
    }
    return null;
  }
}
