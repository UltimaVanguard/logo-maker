class Logo {
    constructor(text, textColor) {
        this.text = text;
        this.textColor = textColor
    }

    render() {
        throw new Error('Child class must implement render() method')
    }

    renderText(yCoords) {
        return `<text x="150" y="${yCoords}" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = { Logo }