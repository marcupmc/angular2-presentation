import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  template: require('./highlight.component.html'),
  directives: [HighlightDirective],
  styles: [
    require('../../assets/molecules/card.scss'),
    require('../../assets/organisms/list-card.scss'),
    require('../../assets/pages/menu.scss')
  ]
})
export class HighlightComponent{}
