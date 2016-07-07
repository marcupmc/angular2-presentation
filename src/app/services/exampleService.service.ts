import { Injectable } from '@angular/core';

@Injectable()
export class ExampleService {

    getListOfThing() {
        return ['yo', 'hello', 'hi'];
    }

}