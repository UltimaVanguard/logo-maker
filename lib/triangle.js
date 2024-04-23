const { Logo } = require('./logo.js');

class Triangle extends Logo {
    constructor(color, text, textColor) {
        super(text, textColor);
        this.color = color;
    }

    render() {
        return `<polygon points="200,10 250,190 160,210" fill="${this.color}" />`;
    }
};

module.exports = { Triangle };