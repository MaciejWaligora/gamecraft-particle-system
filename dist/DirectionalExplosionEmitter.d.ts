import { ParticleEmitter, ParticleEmitterConfig } from "./ParticleEmitter";
export interface DirectionalExplosionEmitterConfig extends ParticleEmitterConfig {
}
export declare class DirectionalExplosionEmitter extends ParticleEmitter<DirectionalExplosionEmitterConfig> {
    private _startAngle;
    private _endAngle;
    setDirection(startAngle: number, endAngle: number): void;
    emitParticles(x: number, y: number, count: number): void;
}
