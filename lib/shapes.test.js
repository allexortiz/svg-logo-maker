//importing the classes triangle, square, and circle from shapes.js
const { Triangle, Square, Circle } = require('./shapes.js');

//testing for a trinagle with a blue background
describe('Traingle test', () => {
    test('This for a triangle with a blue background', () => {
        const shape = new Triangle();
        shape.setColor('blue');
        expect(shape.render()).toEqual(
            '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
        );
    });
});

//testing for a square with a purple background
describe('Square test', () => {
    test('This for a square with a purple background', () => {
        const shape = new Square();
        shape.setColor('purple');
        expect(shape.render()).toEqual(
            '<rect x="73" y="40" width="160" height="160" fill="purple" />'
        );
    });
});

//testing for a circle with a green background
describe('Circle test', () => {
    test('This for a circle with a green background', ()  => {
        const shape = new Circle();
        shape.setColor('green');
        expect(shape.render()).toEqual(
            '<circle cx="150" cy="115" r="80" fill="green" />'
        );
    });
});