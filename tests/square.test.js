const { Square } = require('../lib/square.js');

describe('Square', () => {
    describe('Instantiate', () => {
        it('Should be an instance of Square class', () => {
            const square = new Square();
            expect(square).toBeInstanceOf(Square);
        })

    });
});

describe('Render', () => {
    it('Should render proper svg string for shape', () => {
        const svg = '<rect x="62" y="25" width="175" height="175" fill="red" />'
        const square = new Square('red','GGG', 'black');
        expect(svg).toBe(square.render());
    })
})

describe('Render', () => {
    it('Should render proper svg string for text', () => {
        const svg = '<text x="150" y="150" font-size="60" text-anchor="middle" fill="black">GGG</text>'
        const square = new Square('red','GGG', 'black');
        expect(svg).toBe(square.renderText(150));
    })
})