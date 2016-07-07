import { Component } from '@angular/core';
import { ExampleService } from './exampleService.service';

@Component({
    template: require('./exampleService.component.html'),
    providers: [ExampleService]
})
export class ExampleServiceComponent {

    arrayOfThings:string[] = [];

    constructor(private exampleService:ExampleService) {

    }

    showThings(){
        this.arrayOfThings = this.exampleService.getListOfThing();
    }

}