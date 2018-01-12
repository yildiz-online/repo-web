import {Component, OnInit} from '@angular/core';
import {Repo} from './Repo';
import {RepoService} from './repo.service';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  content: Observable<Repo[]>;

  dummyRepo: Repo[] = [
    {name: 'name1', description: 'desc1', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name2', description: 'desc2', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name3', description: 'desc3aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name4', description: 'desc4', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name5', description: 'desc5', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name6', description: 'desc6', pushed_at: new Date('2017-10-27T14:41:19Z')},
    {name: 'name7', description: 'desc7', pushed_at: new Date('2017-10-27T14:41:19Z')}];

  constructor(private repoService: RepoService) {

  }

  ngOnInit(): void {
    //this.content = Observable.of(this.dummyRepo);
    this.content = this.repoService.getAllRepo();
  }
}
