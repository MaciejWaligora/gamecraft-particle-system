import { ParticleEmitter, ParticleEmitterConfig } from './ParticleEmitter';
export declare class ExplosionEmitter extends ParticleEmitter<ParticleEmitterConfig> {
    emitParticles(x: number, y: number, count: number): void;
}
