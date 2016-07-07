import { TodoListComponent } from '../../app/todoList/todoList.component';
import { TodoListService} from '../../app/todoList/todoList.service';

describe('TodoListComponent', () => {

    let todoList:TodoListComponent;
    let todoListService:TodoListService = new TodoListService();

    beforeEach( () => {
        todoList = new TodoListComponent(todoListService);
    });

    describe('init', () => {
        it('tasks list should be empty', () => {
            expect(todoList.tasks).toEqual([]);
        });

        it('newTask should be an empty list', () => {
            expect(todoList.newTask).toEqual('');
        });
    });

    describe('addATask', () => {
        it('should a task to the list', () => {
            todoList.addATask('myNewTask');
            expect(todoList.tasks).toEqual(['myNewTask']);
        });
    });

    describe('removeTask', () => {
    });

    describe('getDefaultTasks', () => {
        it('should call TodoListService', () => {
            spyOn(todoListService, 'getInitialListOfTodos').and.returnValue(['1', '2']);
            todoList.getDefaultTasks()
            expect(todoListService.getInitialListOfTodos).toHaveBeenCalled();
            expect(todoList.tasks).toEqual(['1', '2']);
        })
    });
});
