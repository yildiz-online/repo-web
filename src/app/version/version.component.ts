import {Component, OnInit} from '@angular/core';
import {VersionService} from "./version.service";
import {Version} from "./Version";

@Component({
  selector: 'version',
  templateUrl: './version.component.html',
  styleUrls: ['./version.component.css']
})
export class VersionComponent implements OnInit {

   version : Version;

  constructor(private versionService : VersionService) {}

  ngOnInit(): void {
    this.versionService.getVersion().subscribe(data => {
      this.version = data;
    });
  }
}
