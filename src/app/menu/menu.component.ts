import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';

@Component({
  template: require('./menu.component.html'),
  directives: [ROUTER_DIRECTIVES],
  styles: [
    require('../../assets/molecules/card.scss'),
    require('../../assets/organisms/list-card.scss'),
    require('../../assets/pages/menu.scss')
  ]
})
export class MenuComponent{}
