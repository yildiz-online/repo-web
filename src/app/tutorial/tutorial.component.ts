import {Component} from '@angular/core';
import {Meta} from "@angular/platform-browser";

@Component({
  selector: 'tutorial',
  templateUrl: './tutorial.component.html',
  styleUrls: ['./tutorial.component.css']
})
export class TutorialComponent {

  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: 'How to use the game engine Yildiz-Engine' })
  }
}
