const { Triangle } = require('./triangle.js');
const { Square } = require('./square.js');
const { Circle } = require('./circle.js');

function createLogo(shape, color, text, textColor) {
    let logo;
    let xCoords;
    let yCoords;
    switch (shape) {
        case 'triangle':
            logo = new Triangle(color, text, textColor);
            yCoords = 165;
            break;
        case 'square':
            logo = new Square(color, text, textColor);
            yCoords = 150
            break;
        default:
            logo = new Circle(color, text, textColor);
            yCoords = 150
            break;
    }

    console.log(logo);
    const defineShape = logo.render();
    const defineText = logo.renderText(yCoords);
    
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${defineShape}
        ${defineText}
    </svg>`
}

module.exports = { createLogo };