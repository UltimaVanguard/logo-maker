// class of logo
class Logo {
    constructor(text, textColor) {
        // all logo have text and textColor
        this.text = text;
        this.textColor = textColor
    }

    render() {
        throw new Error('Child class must implement render() method')
    }

    // renders text position based on ycoords
    renderText(yCoords) {
        return `<text x="150" y="${yCoords}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

// exports class
module.exports = { Logo }