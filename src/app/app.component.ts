import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {ViewEncapsulation} from '@angular/core';

@Component({
  selector: 'my-app',
  template: require('./app.component.html'),
  directives: [ROUTER_DIRECTIVES],
  styles: [require('../assets/common/common.scss')],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent{}
