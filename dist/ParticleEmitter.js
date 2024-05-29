"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ParticleEmitter = void 0;
const PIXI = __importStar(require("pixijs"));
class ParticleEmitter extends PIXI.ParticleContainer {
    constructor(config) {
        super(1000, { scale: true, position: true, rotation: true, uvs: true, alpha: true });
        this._particles = [];
        this._textures = config.textures;
    }
    update(delta) {
        this._particles.forEach((particle, index) => {
            particle.update(delta);
            if (!particle.isAlive()) {
                this.removeChild(particle);
                this._particles.splice(index, 1);
            }
        });
    }
}
exports.ParticleEmitter = ParticleEmitter;
