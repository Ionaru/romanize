describe('Test romanize CLI', () => {

    let consoleLogSpy: jest.SpyInstance;

    beforeEach(() => {
        jest.resetModules();
        consoleLogSpy = jest.spyOn(global.console, 'log');
    });

    afterEach(() => {
        consoleLogSpy.mockRestore();
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
        expect(consoleLogSpy).toHaveBeenCalledWith('V');
    });

    // @ts-ignore
    test('Giving extra arguments', () => {

        // Set command argument.
        process.argv = ['', '', '1993', 'Something else'];

        // Run command.
        require('./cli');
        expect(consoleLogSpy).toHaveBeenCalledWith('MCMXCIII');
    });
});
