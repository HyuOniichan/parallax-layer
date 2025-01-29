'use strict'

class ParallaxLayer {

    constructor(options = {}) {
        this.settings = {
            translate: options.translate || 0.5,
            scale: options.scale || 0.005,
        }; 
        this.layers = []; 
        this.handleScroll = this.handleScroll.bind(this); 
    }

    createLayer(dom, { type, layer, direction, unit = 'px' } = {}) {
        if (!dom) return; 
        const layerConfig = { dom, type, layer, direction, unit }; 
        this.layers.push(layerConfig); 
    }

    handleScroll() {
        this.layers.forEach(({ dom, type, layer, direction, unit }) => {
            if (type === 'translate') {
                this.translate(dom, layer, direction, unit); 
            } else if (type == 'scale') {
                this.scale(dom, layer); 
            }
        }); 
    }

    translate(dom, layer, direction, unit) {
        if (!dom || !layer || layer < 1 || !direction) return; 
        const dir = 'margin' + direction.charAt(0).toUpperCase() + direction.slice(1); 
        dom.style[dir] = (window.scrollY * this.settings.translate / layer) + unit; 
    }

    scale(dom, layer) {
        if (!dom || !layer || layer <= 0) return; 
        dom.style.scale = (window.scrollY * this.init.scale / layer + 1); 
    }

    start() {
        window.addEventListener('scroll', this.handleScroll); 
    }

    stop() {
        window.removeEventListener('scroll', this.handleScroll); 
    }

}

module.exports = ParallaxLayer; 
export default ParallaxLayer; 
