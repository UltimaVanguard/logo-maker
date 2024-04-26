// Imports all the shapes
const { Triangle } = require('./triangle.js');
const { Square } = require('./square.js');
const { Circle } = require('./circle.js');

function createLogo(shape, color, text, textColor) {
    let logo;
    let yCoords;
// sets shape and ycoords 
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

    // Sets values for color and text
    const defineShape = logo.render();
    const defineText = logo.renderText(yCoords);

// returns svg code for logo
    return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">
        ${defineShape}
        ${defineText}
    </svg>`
}

// exports for cli.js to use
module.exports = { createLogo };