describe('test romanize CLI', () => {

    jest.spyOn(process.stdout, 'write').mockImplementation();

    // eslint-disable-next-line
    beforeEach(() => {
        jest.resetModules();
    });

    it('forgetting the command argument', () => {
        expect.assertions(1);

        // Set command argument.
        process.argv = ['', ''];

        // Run command.
        expect(() => require('./cli')).toThrow('A number must be given as command parameter.');
    });

    it('displaying errors from the module', () => {
        expect.assertions(1);

        // Set command argument.
        process.argv = ['', '', 'Number'];

        // Run command.
        expect(() => require('./cli')).toThrow('"Number" is not a number that can be converted to Roman numerals.');
    });

    it('calling the command correctly', () => {
        expect.assertions(1);

        // Set command argument.
        process.argv = ['', '', '5'];

        // Run command.
        require('./cli');
        expect(process.stdout.write).toHaveBeenCalledWith('V\n');
    });

    it('giving extra arguments', () => {
        expect.assertions(1);

        // Set command argument.
        process.argv = ['', '', '1993', 'Something else'];

        // Run command.
        require('./cli');
        expect(process.stdout.write).toHaveBeenCalledWith('MCMXCIII\n');
    });
});
