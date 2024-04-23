const { Logo } = require('./logo');

class Circle extends Logo {
    constructor(shape, color, text, textColor) {
        super(text, textColor);
        this.shape = shape;
        this.color = color;
    }

    render() {
        return `<circle cx="150" cy="100" r="80" fill=${this.color}/>`;
    }
};

module.exports = { Circle };