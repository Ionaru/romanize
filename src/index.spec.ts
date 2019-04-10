import { romanize } from './index';

describe('Test romanize', () => {
    test.each([

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
        [800, 'DCCC'],
        [1864, 'MDCCCLXIV'],
        [1993, 'MCMXCIII'],
        [1999, 'MCMXCIX'],
        [2019, 'MMXIX'],
        [8000, 'MMMMMMMM'],

        ['4', 'IV'],
        ['756', 'DCCLVI'],

    ])('%p -> %p', (num, numeral) => {
        expect(romanize(num as number)).toEqual(numeral);
    });

    test.each([

        [-5, 'Only positive numbers can be converted to Roman numerals.'],
        [50.5, 'Only integers can be converted to Roman numerals.'],
        ['not a number', '"not a number" is not a number that can be converted to Roman numerals.'],
        ['🚀', '"🚀" is not a number that can be converted to Roman numerals.'],

    ])('%p -> error', (num, error) => {
        expect(() => romanize(num as number)).toThrow(error as string);
    });
});
