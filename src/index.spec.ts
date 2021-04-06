import { romanize } from './index';

describe('test romanize', () => {
    it.each([

        [0, ''],
        [1, 'I'],
        [2, 'II'],
        [3, 'III'],
        [4, 'IV'],
        [5, 'V'],
        [6, 'VI'],
        [7, 'VII'],
        [8, 'VIII'],
        [9, 'IX'],
        [10, 'X'],

        [250, 'CCL'],
        [290, 'CCXC'],
        [333, 'CCCXXXIII'],
        [444, 'CDXLIV'],
        [555, 'DLV'],
        [666, 'DCLXVI'],
        [888, 'DCCCLXXXVIII'],
        [800, 'DCCC'],
        [1864, 'MDCCCLXIV'],
        [1993, 'MCMXCIII'],
        [1999, 'MCMXCIX'],
        [2019, 'MMXIX'],
        [8000, 'MMMMMMMM'],

        ['4', 'IV'],
        ['756', 'DCCLVI'],

    ])('%p -> %p', (num, numeral) => {
        expect.assertions(1);
        expect(romanize(num as number)).toStrictEqual(numeral);
    });

    it.each([

        [-5, 'Only positive numbers can be converted to Roman numerals.'],
        [50.5, 'Only integers can be converted to Roman numerals.'],
        ['not a number', '"not a number" is not a number that can be converted to Roman numerals.'],
        ['🚀', '"🚀" is not a number that can be converted to Roman numerals.'],

    ])('%p -> error', (num, error) => {
        expect.assertions(1);
        expect(() => romanize(num as number)).toThrow(error as string);
    });
});
