const { Logo } = require('./logo.js');

class Circle extends Logo {
    constructor(color, text, textColor) {
        super(text, textColor);
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill=${this.color}/>`;
    }
};

module.exports = { Circle };