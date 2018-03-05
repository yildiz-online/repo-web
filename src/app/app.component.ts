import {Component, OnInit} from '@angular/core';
import {Repo} from './Repo';
import {RepoService} from './repo.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {Observer} from 'rxjs/Observer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  content: Observable<Repo[]>;

  engine: Observable<Repo[]>;

  common: Observable<Repo[]>;

  module: Observable<Repo[]>;

  component: Observable<Repo[]>;

  feature: Observable<Repo[]>;

  dummyRepo: Repo[] = [
    {name: 'name1', description: 'desc1', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name2', description: '', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name3', description: 'desc3', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name4', description: 'A longer description to test the rendering...', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name5', description: 'desc5', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name6', description: 'desc6', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name7', description: 'desc7', pushed_at: new Date('2017-10-27T14:41:19Z')}];

  constructor(private repoService: RepoService) {

  }

  ngOnInit(): void {
    this.content = Observable.of(this.dummyRepo);
    // this.content = this.repoService.getAllRepo();
  }
}
