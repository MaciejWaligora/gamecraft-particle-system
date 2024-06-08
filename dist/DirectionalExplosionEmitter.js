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
    setDirection(startAngle, endAngle) {
        this._startAngle = startAngle;
        this._endAngle = endAngle;
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
                startSize: 0.02,
                endSize: 0
            });
            console.log(particle);
            particle.x = x;
            particle.y = y;
            this._particles.push(particle);
            this.addChild(particle);
        }
    }
}
exports.DirectionalExplosionEmitter = DirectionalExplosionEmitter;
//# sourceMappingURL=DirectionalExplosionEmitter.js.map