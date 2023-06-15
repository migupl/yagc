class YaGc extends HTMLElement {

    constructor() {
        super()
        this.attachShadow({ mode: 'open' })
    }

    connectedCallback() {
        this.#addWcStyle()
    }

    #addWcStyle = () => {
        const styleEl = document.createElement('style');
        styleEl.textContent = `
ya-gc {
    position: absolute;
    top: 0;
    right: 0;
    margin: 0;
    height: 80px;
    width: 80px;
}
`

        this.appendChild(styleEl)
    }
}

customElements.define('ya-gc', YaGc)