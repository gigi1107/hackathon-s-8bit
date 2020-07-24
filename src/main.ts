import * as Phaser from 'phaser';
import {LoadScene} from "./scenes/LoadScene";
import {MenuScene} from "./scenes/MenuScene";
import { GameScene } from './scenes/GameScene';
let game = new Phaser.Game({
    width: 1750,
    height: 1000,
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