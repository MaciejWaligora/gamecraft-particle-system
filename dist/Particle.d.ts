import * as PIXI from 'pixijs';
export interface ParticleConfig {
    texture: PIXI.Texture;
    velocityX: number;
    velocityY: number;
    life: number;
    startSize: number;
    endSize: number;
}
export declare class Particle<Tconfig extends ParticleConfig> extends PIXI.Sprite {
    protected _velocityX: number;
    protected _velocityY: number;
    protected _life: number;
    protected _age: number;
    protected _startSize: number;
    protected _endSize: number;
    constructor(config: Tconfig);
    update(delta: number): void;
    isAlive(): boolean;
}
