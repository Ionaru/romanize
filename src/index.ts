/**
 * Converts a number to Roman numerals.
 * @param {number | string} input - The number to convert.
 * @return {string} - A Roman number.
 */
export function romanize(input: number | string): string {

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

    const digits = String(num).split('');
    const numerals = [
        '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM',
        '', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC',
        '', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX',
    ];

    let roman = '';
    for (let i = 2; i >= 0; i--) {
        const currentDigit = Number(digits.pop());

        if (isNaN(currentDigit)) {
            continue;
        }

        const numeralsIndex = currentDigit + (i * 10);
        const numeral = numerals[numeralsIndex];

        if (!numeral) {
            continue;
        }

        roman = numeral + roman;
    }

    const thousands = Number(digits.join(''));
    const thousandsNumerals = 'M'.repeat(thousands);
    return thousandsNumerals + roman;
}
