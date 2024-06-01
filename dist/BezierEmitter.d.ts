import { ParticleEmitter, ParticleEmitterConfig } from './ParticleEmitter';
export interface BezierEmitterConfig extends ParticleEmitterConfig {
}
export declare class BezierEmitter extends ParticleEmitter<BezierEmitterConfig> {
    emitParticles(x: number, y: number, count: number): void;
}
