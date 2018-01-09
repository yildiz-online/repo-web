import {Component, OnInit} from '@angular/core';
import {Repo} from './Repo';
import {RepoService} from './repo.service';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  content: Observable<Repo[]>;

  constructor(private repoService: RepoService) {

  }

  ngOnInit(): void {
    this.content = this.repoService.getAllRepo();
  }
}
