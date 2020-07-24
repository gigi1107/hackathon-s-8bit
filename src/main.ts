import * as Phaser from 'phaser';
import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import { GameScene } from './scenes/GameScene';
let game = new Phaser.Game({
    // game = new Phaser.Game(window.innerWidth * window.devicePixelRatio, window.innerHeight * window.devicePixelRatio, Phaser.CANVAS, 'gameArea');
// 
    width: window.innerWidth,
    height: window.innerHeight,
    scene: [
        LoadScene, MenuScene, GameScene

    ],
    render: {
        pixelArt: true
    },
    physics: {
        default: "arcade",
        arcade: {
            debug: false
        }

    }

});