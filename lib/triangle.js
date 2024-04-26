// imports logo class
const { Logo } = require('./logo.js');

class Triangle extends Logo {
    constructor(color, text, textColor) {
        super(text, textColor);
        this.color = color;
    }

    // renders triangle shape
    render() {
        return `<polygon points="150, 18 244, 182 56, 182" fill="${this.color}" />`;
    }
};

// exports class
module.exports = { Triangle };