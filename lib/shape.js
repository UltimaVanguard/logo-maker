const { Logo } = require('./logo');

class Shape extends Logo {
    constructor(shape, color) {
        this.shape = shape;
        this.color = color;
    }

    render() {
        switch(this.shape) {
            case 'circle':
                return `<circle cx="150" cy="100" r="80" fill=${this.color}/>`;
                break;
            case 'square':
                return `<rect cx="125" cy="125" width="125" length="125" fill=${this.color}/>`
                break;
            default:
                return `<polygon points="200,10 250,190 160,210" fill=${this.color}/>`
                break
        }
    }
}