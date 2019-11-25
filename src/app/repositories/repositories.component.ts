import {Component, OnInit} from '@angular/core';
import {RepositoriesService} from './repositories.service';
import {CommitsService} from './commits.service';
import {Observable} from 'rxjs';
import 'rxjs/add/observable/of';
import {Meta} from "@angular/platform-browser";
import {Repository} from "./Repository";
import {RepositoryPresentation} from "./RepositoryPresentation";

@Component({
  selector: 'repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css']
})
export class RepositoriesComponent implements OnInit {

  content: Observable<Repository[]>;
  repositoryPresentation: RepositoryPresentation;

  constructor(private repoService: RepositoriesService, private commitService: CommitsService, private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: 'The list of all the open-source repositories for the game engine Yildiz-Engine'})
  }

  ngOnInit(): void {
    this.repositoryPresentation = new RepositoryPresentation();
    this.content = this.repoService.getAllRepo();
  }
}
