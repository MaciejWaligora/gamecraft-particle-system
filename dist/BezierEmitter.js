"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BezierEmitter = void 0;
const ParticleEmitter_1 = require("./ParticleEmitter");
const BezierParticle_1 = require("./BezierParticle");
class BezierEmitter extends ParticleEmitter_1.ParticleEmitter {
    emitParticles(x, y, count) {
        for (let i = 0; i < count; i++) {
            // Generate a random angle between 0 and 2*PI
            const angle = Math.PI * 2;
            // Generate a random speed (magnitude of velocity) within a desired range
            const speed = Math.random() * 10;
            // Convert polar coordinates to Cartesian coordinates
            const velocityX = Math.cos(angle) * speed;
            const velocityY = Math.sin(angle) * speed;
            const life = Math.random() * 60 + 4; // Lifetime between 4 and 64 seconds
            // Randomize Bezier control points within a certain range
            const controlPoint1 = {
                x: x + (Math.random() - 0.5) * 100,
                y: y + (Math.random() - 0.5) * 100
            };
            const controlPoint2 = {
                x: x + (Math.random() - 0.5) * 200,
                y: y + (Math.random() - 0.5) * 200
            };
            const bezierControlPoints = [controlPoint1, controlPoint2];
            const textureIndex = Math.floor(Math.random() * this._textures.length);
            const particle = new BezierParticle_1.BezierParticle({
                texture: this._textures[textureIndex],
                velocityX: velocityX,
                velocityY: velocityY,
                life: life,
                startSize: 0.05,
                endSize: 0,
                bezierControlPoints: bezierControlPoints
            });
            particle.x = x;
            particle.y = y;
            this._particles.push(particle);
            this.addChild(particle);
        }
    }
}
exports.BezierEmitter = BezierEmitter;
//# sourceMappingURL=BezierEmitter.js.map