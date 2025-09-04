import fizzbuzz from './fizzbuzz';

describe('fizzbuzz', () => {
    it('deberia devolver "1" si le pongo de entrada 1', () => {
        expect(fizzbuzz(1)).toEqual(1);
    });

});