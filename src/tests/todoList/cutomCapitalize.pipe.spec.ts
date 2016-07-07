import {CustomCapitalizePipe} from '../../app/todoList/customCapitalize.pipe';

describe('CustomCapitalizePipe', () => {
    let customCapitalize:CustomCapitalizePipe;

    beforeEach(() => {
        customCapitalize = new CustomCapitalizePipe();
    });

    describe('transform', () => {
        it('should capitalize a string', ()=> {
            expect(customCapitalize.transform('hello world')).toEqual('HELLO WORLD');
        });
    });
});