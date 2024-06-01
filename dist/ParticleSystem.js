"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleSystem = void 0;
class ParticleSystem {
    constructor(config) {
        this.emitters = [];
        this._renderer = config.renderer;
        this._renderer.ticker.add((delta) => {
            this._update(delta);
        });
    }
    addEmitter(emitter) {
        this._renderer.stage.addChild(emitter);
        this.emitters.push(emitter);
    }
    _update(delta) {
        this.emitters.forEach(emitter => emitter.update(delta));
    }
}
exports.ParticleSystem = ParticleSystem;
//# sourceMappingURL=ParticleSystem.js.map