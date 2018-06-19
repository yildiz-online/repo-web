import {Component, OnInit} from '@angular/core';
import {Repo} from './Repo';
import {RepoService} from './repo.service';
import {Observable, Observer} from 'rxjs';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  content: Observable<Repo[]>;

  dummyRepo: Repo[] = [
    {name: 'engine-shared', description: 'desc1', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'common-log', description: '', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'docker-image', description: 'desc3', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'feature-1', description: 'A longer description to test the rendering...', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'parent', description: 'desc5', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'module-1', description: 'desc6', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'module-2', description: 'desc7', pushed_at: new Date('2017-10-27T14:41:19Z')}];

  constructor(private repoService: RepoService) {

  }

  ngOnInit(): void {
    this.content = this.repoService.getAllRepo();
  }
}
