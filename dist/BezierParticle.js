"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BezierParticle = void 0;
const Particle_1 = require("./Particle");
class BezierParticle extends Particle_1.Particle {
    constructor(config) {
        super(config);
        this.bezierControlPoints = config.bezierControlPoints;
    }
    update(delta) {
        this._age += delta;
        const t = this._age / this._life;
        if (this.bezierControlPoints.length > 0) {
            const { x, y } = this.getBezierPoint(t);
            this.position.set(x, y);
        }
        else {
            super.update(delta);
        }
        this.alpha = 1 - t;
        const size = this._startSize + (this._endSize - this._startSize) * t;
        this.scale.set(size);
    }
    getBezierPoint(t) {
        const [p0, p1, p2] = [{ x: this.x, y: this.y }, ...this.bezierControlPoints];
        const x = Math.pow((1 - t), 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
        const y = Math.pow((1 - t), 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;
        return { x, y };
    }
}
exports.BezierParticle = BezierParticle;
//# sourceMappingURL=BezierParticle.js.map