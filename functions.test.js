const { returnTwo, greeting, add, multiply, divide, subtract} = require('./functions');

test('return number 2', () => {
    expect(returnTwo()).toEqual(2)
});

test('greeting', () => {
    expect(greeting('James')).toEqual('Hello, James!');
    expect(greeting('Jill')).toEqual('Hello, Jill!');
});
describe('Math Functions', () => {
    test('add', () => {
        expect(add(1, 2)).toEqual(3);
        expect(add(5, 9)).toEqual(14);
    });
    
    test('multiply', () => {
        expect(multiply(1, 2)).toEqual(2);
        expect(multiply(5, 9)).toEqual(45);
    });
    
    test('divide', () => {
        expect(divide(1, 2)).toEqual(1/2);
        expect(divide(5, 9)).toEqual(5/9);
    });
    
    test('subtract', () => {
        expect(subtract(1, 2)).toEqual(-1);
        expect(subtract(5, 9)).toEqual(-4);
    });

});

