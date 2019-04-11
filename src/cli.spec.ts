describe('Test romanize CLI', () => {

    // tslint:disable-next-line:no-console
    console.log = jest.fn();

    beforeEach(() => {
        jest.resetModules();
    });

    test('Forgetting the command argument', () => {

        // Set command argument.
        process.argv = ['', ''];

        // Run command.
        expect(() => require('./cli')).toThrow('A number must be given as command parameter.');
    });

    test('Displaying errors from the module', () => {

        // Set command argument.
        process.argv = ['', '', 'Number'];

        // Run command.
        expect(() => require('./cli')).toThrow('"Number" is not a number that can be converted to Roman numerals.');
    });

    test('Calling the command correctly', () => {

        // Set command argument.
        process.argv = ['', '', '5'];

        // Run command.
        require('./cli');
        // tslint:disable-next-line:no-console
        expect(console.log).toHaveBeenCalledWith('V');
    });

    test('Giving extra arguments', () => {

        // Set command argument.
        process.argv = ['', '', '1993', 'Something else'];

        // Run command.
        require('./cli');
        // tslint:disable-next-line:no-console
        expect(console.log).toHaveBeenCalledWith('MCMXCIII');
    });
});
