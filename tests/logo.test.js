const { Logo } = require('../lib/logo.js');

describe('Logo', () => {
    describe('Instantiate', () => {
        it('Should be an instance of Logo class', () => {
            const logo = new Logo();
            expect(logo).toBeInstanceOf(Logo);
        })

    });
});

describe('Render', () => {
    it('Should render proper svg string for text', () => {
        const svg = '<text x="150" y="150" font-size="60" text-anchor="middle" fill="black">GGG</text>'
        const logo = new Logo('GGG', 'black');
        expect(svg).toBe(logo.renderText(150));
    })
})