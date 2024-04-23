const { Logo } = require('./logo.js');

class Square extends Logo {
    constructor(color, text, textColor) {
        super(text, textColor);
        this.color = color;
    }

    render() {
        return `<rect x="10" y="10" width="125" length="125" fill="${this.color}" />`;
    }
};

module.exports = { Square };