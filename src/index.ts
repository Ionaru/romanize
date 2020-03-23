/**
 * Converts a number to Roman numerals.
 * @param {number | string} input - The number to convert.
 * @return {string} - A Roman number.
 */
export const romanize = (input: number | string): string => {

    const num = Number(input);

    if (isNaN(num)) {
        throw new Error(`"${input}" is not a number that can be converted to Roman numerals.`);
    }

    if (!Number.isInteger(num)) {
        throw new Error(`Only integers can be converted to Roman numerals.`);
    }

    if (num < 0) {
        throw new Error(`Only positive numbers can be converted to Roman numerals.`);
    }

    const digits = num.toString().split('');
    const numerals = [
        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX', // set 0 (   1 -   9 )
        '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC', // set 1 (  10 -  90 )
        '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM', // set 2 ( 100 - 900 )
    ];

    let roman = '';
    [0, 1, 2].forEach((numeralSet) => {
        const currentDigit = Number(digits.pop());

        if (isNaN(currentDigit)) {
            return;
        }

        const numeralsIndex = currentDigit + (numeralSet * 10);
        const numeral = numerals[numeralsIndex];
        roman = numeral + roman;
    });

    const thousands = Number(digits.join(''));
    const thousandsNumerals = 'M'.repeat(thousands);
    return thousandsNumerals + roman;
};
