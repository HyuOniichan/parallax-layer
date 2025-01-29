declare class ParallaxLayer {
    constructor(options?: { translate?: number; scale?: number });
    registerLayer(
        dom: HTMLElement,
        options?: { type?: 'translate' | 'scale'; layer?: number; direction?: string; unit?: string }
    ): void;
    start(): void;
    stop(): void;
}

export default ParallaxLayer;
