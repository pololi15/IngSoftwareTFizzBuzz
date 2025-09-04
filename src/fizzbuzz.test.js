import fizzbuzz from './fizzbuzz';

describe('fizzbuzz', () => {
    it('deberia devolver "1" si le pongo de entrada 1', () => {
        expect(fizzbuzz(1)).toEqual(1);
    });
    it('deberia devolver "2" si le pongo de entrada 2', () => {
        expect(fizzbuzz(2)).toEqual(2);
    });
    it('deberia devolver "fizz" si le pongo de entrada 3', () => {
        expect(fizzbuzz(3)).toEqual("fizz");
    });
    it('deberia devolver "buzz" si le pongo de entrada 5', () => {
        expect(fizzbuzz(5)).toEqual("buzz");
    });

});