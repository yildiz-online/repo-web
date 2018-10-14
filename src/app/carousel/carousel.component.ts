import {Component} from '@angular/core';
import { Meta } from '@angular/platform-browser';

@Component({
  selector: 'carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent {

  constructor(private meta: Meta) {
    this.meta.updateTag({ name: 'description', content: 'The Yildiz-Engine is a free and open-source 3D multi-player game engine.' })
  }
}
