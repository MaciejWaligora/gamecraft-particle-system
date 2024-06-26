import * as PIXI from 'pixijs';
import { Particle, ParticleConfig } from './Particle';
export interface ParticleEmitterConfig {
    textures: PIXI.Texture[];
}
export declare abstract class ParticleEmitter<Tconfig extends ParticleEmitterConfig> extends PIXI.ParticleContainer {
    protected _particles: Particle<ParticleConfig>[];
    protected _textures: PIXI.Texture[];
    constructor(config: Tconfig);
    abstract emitParticles(x: number, y: number, count: number): void;
    update(delta: number): void;
}
