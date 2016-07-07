import { Injectable } from '@angular/core';

@Injectable()
export class TodoListService {

    getInitialListOfTodos() {
        return ['first task', 'second task'];
    }

}
