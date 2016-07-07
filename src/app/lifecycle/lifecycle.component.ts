import { Component, OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck } from '@angular/core';
@Component({
  template: require('./lifecycle.component.html')
})
export class LifeCycleComponent implements OnInit, AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, DoCheck{
  
  someValue = 'hello';

  constructor() {
  }

  ngOnInit() {
    console.log('-- OnInit --');
  }

  ngAfterContentChecked() {
    console.log('-- AfterContentChecked --');
  }

  ngAfterContentInit() {
    console.log('-- AfterContentInit --');
  }

  ngDoCheck() {
    console.log('-- DoCheck --');
  }

  ngAfterViewInit() {
    console.log('-- AfterViewInit --');
  }

  ngAfterViewChecked() {
    console.log('-- AfterViewChecked --');
  }

}
