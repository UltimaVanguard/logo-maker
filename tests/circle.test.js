const { Circle } = require('../lib/circle.js');

describe('Circle', () => {
    describe('Instantiate', () => {
        it('Should be an instance of Circle class', () => {
            const circle = new Circle();
            expect(circle).toBeInstanceOf(Circle);
        })

    });
});

describe('Render', () => {
    it('Should render proper svg string for shape', () => {
        const svg = '<circle cx="150" cy="100" r="80" fill="red" />'
        const circle = new Circle('red','GGG', 'black');
        expect(svg).toBe(circle.render());
    })
})

describe('Render', () => {
    it('Should render proper svg string for text', () => {
        const svg = '<text x="150" y="150" font-size="60" text-anchor="middle" fill="black">GGG</text>'
        const circle = new Circle('red','GGG', 'black');
        expect(svg).toBe(circle.renderText(150));
    })
})