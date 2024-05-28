"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ExplosionEmitter = void 0;
const ParticleEmitter_1 = require("./ParticleEmitter");
const Particle_1 = require("./Particle");
class ExplosionEmitter extends ParticleEmitter_1.ParticleEmitter {
    emitParticles(x, y, count) {
        for (let i = 0; i < count; i++) {
            const velocityX = (Math.random() - 0.5) * 10;
            const velocityY = (Math.random() - 0.5) * 10;
            const life = Math.random() * 20 + 4;
            const particle = new Particle_1.Particle({
                texture: this._texture,
                velocityX: velocityX,
                velocityY: velocityY,
                life: life,
                startSize: 0.05,
                endSize: 0
            });
            particle.x = x;
            particle.y = y;
            this._particles.push(particle);
            this.addChild(particle);
        }
    }
}
exports.ExplosionEmitter = ExplosionEmitter;
