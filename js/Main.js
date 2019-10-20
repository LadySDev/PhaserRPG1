import { Game } from './Game.js';

let config = {
    parent: 'divCanvaParent',
    type: Phaser.AUTO,
    width: 960,
    height: 540,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    scene: [ Game ],
    pixelArt: true
};

let game = new Phaser.Game(config);