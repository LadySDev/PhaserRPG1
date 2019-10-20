export class Game extends Phaser.Scene {
    constructor() {
        super('Game');
    }

    preload(){
        console.log('Game preload');
    }

    create(){
        console.log('Game create');
    }

    update(time, delta){

    }
}