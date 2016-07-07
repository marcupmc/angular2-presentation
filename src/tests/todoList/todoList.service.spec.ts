import { TodoListService} from '../../app/todoList/todoList.service';

describe('TodoListService', () => {
    let todoListService : TodoListService;

    beforeEach(() => {
        todoListService = new TodoListService();
    });

    describe('getInitialListOfTodos', () => {
        it('should return a default list', () => {
            expect(todoListService.getInitialListOfTodos()).toEqual(['first task', 'second task']);
        });
    });
    
});