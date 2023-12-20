import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Repository} from './Repository';
import {Observable, map} from 'rxjs';

@Injectable()
export class RepositoriesService {

  constructor(private httpClient: HttpClient) {
  }

  public getAllRepo(): Observable<Repository[]> {
        return this.getPage('https://api.github.com/users/yildiz-online/repos?page=1')
            .pipe(
                map(page => page.result),
                map(repos => repos.filter(repo => this.filterRepos(repo))),
            );
  }

  private filterRepos(repo : Repository) : Boolean {
      return !repo.name.startsWith("test-")
        && ! repo.name.startsWith("module-entity-modular")
        && ! repo.name.startsWith("make-release")
        && ! repo.name.startsWith("webapp")
        && ! repo.name.startsWith("repo-web");
  }

  private getPage(url: string): Observable<{ next: string, result: Repository[] }> {
    return this.httpClient.get<Repository[]>(url, {observe: 'response'})
        .pipe(
      map(response => {
        const link = response.headers.get('Link');
        return {
          next: this.getNextUrl(link),
          result: response.body
        };
      }));
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
