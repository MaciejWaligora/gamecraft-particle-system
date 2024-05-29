import { ParticleEmitter, ParticleEmitterConfig } from './ParticleEmitter';
import { Particle } from './Particle';

export class ExplosionEmitter extends ParticleEmitter<ParticleEmitterConfig> {



    public emitParticles(x: number, y: number, count: number) {
        const emitted: Record<number, number> = {}
        for (let i = 0; i < count; i++) {
            const angle = Math.random() * Math.PI * 2;
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
                startSize: 0.009,
                endSize: 0
            });

            if(emitted[randomSprite]){
                emitted[randomSprite]++;
            }else{
                emitted[randomSprite] = 1
            }
            particle.x = x;
            particle.y = y;
            this._particles.push(particle);
            this.addChild(particle);
        }
        console.log(emitted);
    }
}