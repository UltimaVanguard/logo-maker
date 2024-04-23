const { Triangle } = require('./triangle.js');
const { Square } = require('./square.js');
const { Circle } = require('./circle.js');

function createLogo(shape, color, text, textColor) {
    let logo
    switch (shape) {
        case 'triangle':
            logo = new Triangle(color, text, textColor);
            break;
        case 'square':
            logo = new Square(color, text, textColor);
            break;
        default:
            const logo = new Circle(color, text, textColor);
    }

    const defineShape = logo.render();
    const defineText = logo.renderText();
    
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${defineShape}
        ${defineText}
    </svg>`
}

module.exports = { createLogo };