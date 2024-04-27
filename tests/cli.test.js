const CLI = require('../lib/cli.js');

describe('CLI', () => {
    describe('Instantiate', () => {
        it('Should be an instance of CLI class', () => {
            const cli = new CLI();
            expect(cli).toBeInstanceOf(CLI);
        })

    });
});