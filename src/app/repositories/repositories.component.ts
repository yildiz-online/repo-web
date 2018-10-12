import {Component, OnInit} from '@angular/core';
import {Repository} from './Repository';
import {RepositoriesService} from './repositories.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';

@Component({
  selector: 'repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  content: Observable<Repository[]>;

  constructor(private repoService: RepositoriesService) {}

  ngOnInit(): void {
    this.content = this.repoService.getAllRepo();
  }
}
