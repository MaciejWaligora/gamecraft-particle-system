import { ParticleEmitter, ParticleEmitterConfig } from './ParticleEmitter';
import * as PIXI from 'pixijs';
export interface ParticleSystemConfig {
    renderer: PIXI.Application;
}
export declare class ParticleSystem<Tconfig extends ParticleSystemConfig> {
    private emitters;
    private _renderer;
    constructor(config: Tconfig);
    addEmitter<T extends ParticleEmitter<ParticleEmitterConfig>>(emitter: T): void;
    private _update;
}
