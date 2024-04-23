const { Logo } = require('./logo');

class Triangle extends Logo {
    constructor(shape, color, text, textColor) {
        super(text, textColor);
        this.shape = shape;
        this.color = color;
    }

    render() {
        return `<polygon points="200,10 250,190 160,210" fill=${this.color}/>`;
    }
};

module.exports = { Triangle };