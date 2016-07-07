import { Component } from '@angular/core';
import { CustomPipe } from './customPipe.pipe';

@Component({
  selector: 'hero-birthday',
  template: require('./examplePipe.component.html'),
  pipes: [CustomPipe]
})
export class ExamplePipeComponent {
  birthday = new Date(1989, 7, 29);
}