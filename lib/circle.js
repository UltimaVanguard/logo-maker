// imports logo
const { Logo } = require('./logo.js');

class Circle extends Logo {
    constructor(color, text, textColor) {
        super(text, textColor);
        this.color = color;
    }

    // renders a circle for shape
    render() {
        return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`;
    }
};

// exports class
module.exports = { Circle };