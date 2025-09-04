import fizzbuzz from './fizzbuzz';
import { fizzbuzzSequence } from './fizzbuzz';

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
    it('deberia devolver "fizzbuzz" si le pongo de entrada 15', () => {
        expect(fizzbuzz(15)).toEqual("fizzbuzz");
    });
    it('deberia devolver "fizz" si le pongo de entrada 6', () => {
        expect(fizzbuzz(6)).toEqual("fizz");
    });
    it('deberia devolver "buzz" si le pongo de entrada 10', () => {
        expect(fizzbuzz(10)).toEqual("buzz");
    });

    it('deberia devolver "fizzbuzz" si le pongo de entrada 30', () => {
        expect(fizzbuzz(30)).toEqual("fizzbuzz");
    });

    it('debería devolver la secuencia hasta 10', () => {
        expect(fizzbuzzSequence(10)).toEqual([
      1, 2, "fizz", 4, "buzz", "fizz", 7, 8, "fizz", "buzz" 
    ]);
  });
});