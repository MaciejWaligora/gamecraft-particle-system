"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DirectionalExplosionEmitter = void 0;
const Particle_1 = require("./Particle");
const ParticleEmitter_1 = require("./ParticleEmitter");
class DirectionalExplosionEmitter extends ParticleEmitter_1.ParticleEmitter {
    constructor() {
        super(...arguments);
        this._startAngle = 0;
        this._endAngle = Math.PI * 2;
    }
    _normalizeAngle(angle) {
        const TWO_PI = Math.PI * 2;
        angle = angle % TWO_PI;
        if (angle < 0) {
            angle += TWO_PI;
        }
        return angle;
    }
    setDirection(startAngle, endAngle) {
        this._startAngle = this._normalizeAngle(startAngle);
        this._endAngle = this._normalizeAngle(endAngle);
    }
    emitParticles(x, y, count) {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * (this._endAngle - this._startAngle) + this._startAngle;
            const speed = Math.random() * 10;
            const velocityX = Math.cos(angle) * speed;
            const velocityY = Math.sin(angle) * speed;
            const life = Math.random() * 60 + 4;
            const randomSprite = Math.floor(Math.random() * (this._textures.length));
            const particle = new Particle_1.Particle({
                texture: this._textures[randomSprite],
                velocityX: velocityX,
                velocityY: velocityY,
                life: life,
                startSize: 0.009,
                endSize: 0
            });
            particle.x = x;
            particle.y = y;
            this._particles.push(particle);
            this.addChild(particle);
        }
    }
}
exports.DirectionalExplosionEmitter = DirectionalExplosionEmitter;
//# sourceMappingURL=DirectionalExplosionEmitter.js.map