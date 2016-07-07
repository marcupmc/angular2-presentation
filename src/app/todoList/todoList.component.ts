import { Component } from '@angular/core';
import { TodoListService} from './todoList.service';
import { CustomCapitalizePipe} from './customCapitalize.pipe';

@Component({
    template: require('./todoList.component.html'),
    providers: [TodoListService],
    pipes:[CustomCapitalizePipe]
})
export class TodoListComponent {

    tasks:string[] = [];
    newTask:string = '';

    constructor(private todoListService:TodoListService) {
        
    }

    addATask(newTaskToAdd:string) {
        this.tasks.push(newTaskToAdd);
        this.newTask = '';
    }

    removeTask(index:number) {
       this.tasks.splice(index, 1);
    }

    getDefaultTasks() {
        this.tasks = this.todoListService.getInitialListOfTodos();
    }
};
