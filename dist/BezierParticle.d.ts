import { Particle, ParticleConfig } from "./Particle";
export interface BezierParticleConfig extends ParticleConfig {
    bezierControlPoints: {
        x: number;
        y: number;
    }[];
}
export declare class BezierParticle<Tconfig extends BezierParticleConfig> extends Particle<BezierParticleConfig> {
    bezierControlPoints: {
        x: number;
        y: number;
    }[];
    constructor(config: Tconfig);
    update(delta: number): void;
    private getBezierPoint;
}
