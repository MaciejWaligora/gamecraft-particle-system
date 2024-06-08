import { Particle } from "./Particle";
import { ParticleEmitter, ParticleEmitterConfig } from "./ParticleEmitter";

export interface DirectionalExplosionEmitterConfig extends ParticleEmitterConfig{

}



export class DirectionalExplosionEmitter extends ParticleEmitter<DirectionalExplosionEmitterConfig>{

    private _startAngle: number = 0;
    private _endAngle: number = Math.PI * 2;

    public setDirection(startAngle: number, endAngle: number){
        this._startAngle = startAngle
        this._endAngle = endAngle
    }
    emitParticles(x: number, y: number, count: number): void {
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * (this._endAngle - this._startAngle) + this._startAngle;
            const speed = Math.random() * 10;
            const velocityX = Math.cos(angle) * speed;
            const velocityY = Math.sin(angle) * speed;
            const life = Math.random() * 60 + 4;

            const randomSprite = Math.floor(Math.random() * (this._textures.length))

            const particle = new Particle({
                texture: this._textures[randomSprite],
                velocityX: velocityX,
                velocityY: velocityY,
                life: life,
                startSize: 0.1,
                endSize: 0
            });
            particle.x = x;
            particle.y = y;
            this._particles.push(particle);
            this.addChild(particle);
        }
    }
}