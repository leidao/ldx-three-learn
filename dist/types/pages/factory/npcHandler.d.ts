import Viewer from '@/three';
import { Game } from './game';
export declare class NPCHandler {
    game: Game;
    viewer: Viewer;
    constructor(game: Game);
    load(): void;
    initNpcs(): void;
}
