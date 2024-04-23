class Logo {
    constructor(child) {
        this.child = child;
    }

    render() {
        throw new Error('Child class must implement render() method')
    }

    renderInnerHTML() {
        return this.child
            .map((text) => {
                if (typeof text === "string") {
                     return text
            } else {
                return text.render();            }
            })
            .join('');
    }
}

module.exports = { Logo }