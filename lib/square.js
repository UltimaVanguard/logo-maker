const { Logo } = require('./logo.js');

class Square extends Logo {
    constructor(color, text, textColor) {
        super(text, textColor);
        this.color = color;
    }

    render() {
        return `<rect x="62" y="25" width="175" height="175" fill="${this.color}" />`;
    }
};

module.exports = { Square };