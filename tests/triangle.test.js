const { Triangle } = require('../lib/triangle.js');

describe('Triangle', () => {
    describe('Instantiate', () => {
        it('Should be an instance of Triangle class', () => {
            const triangle = new Triangle();
            expect(triangle).toBeInstanceOf(Triangle);
        })

    });
});

describe('Render', () => {
    it('Should render proper svg string for shape', () => {
        const svg = '<polygon points="150, 18 244, 182 56, 182" fill="red" />'
        const triangle = new Triangle('red','GGG', 'black');
        expect(svg).toBe(triangle.render());
    })
})

describe('Render', () => {
    it('Should render proper svg string for text', () => {
        const svg = '<text x="150" y="150" font-size="60" text-anchor="middle" fill="black">GGG</text>'
        const triangle = new Triangle('red','GGG', 'black');
        expect(svg).toBe(triangle.renderText(150));
    })
})