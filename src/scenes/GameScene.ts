import * as Phaser from 'phaser';

import { CST } from "../CST"

export class GameScene extends Phaser.Scene {
    // keyboard: any;
    left: any
    right: any
    space: any
    phone: Phaser.Physics.Arcade.Sprite
    one: Phaser.Physics.Arcade.Sprite



    constructor() {

        super({
            key: CST.SCENES.GAME
        })
    };
    init() {
    }
    preload() {

        this.anims.create({
            key:"one_bobbing",
            frameRate: 10, 
            frames: this.anims.generateFrameNames("one", {
                prefix: "sonos_one0",
                suffix: ".png",
                start: 0,
                end: 3
            }),
            repeat: -1
            
        })
     }
    create() {
        let background = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * .4, "sea");
        background.setScale(2);

        
        this.phone = this.physics.add.sprite(this.game.renderer.width / 2, this.game.renderer.height * .85, "phone");
        this.phone.setScale(.25);
        this.add.container(0, 0, this.phone);
    

        this.left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.space = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);


        this.one = this.physics.add.sprite(this.game.renderer.width / 2, 100, "one");
        this.add.container(0, 0, this.one);
        this.one.play("one_bobbing", true);


        ///

        //on arrow left move rect left, on arrow right, move rectangle right


    }

    update(time: number, delta: number) {

        this.one.setVelocityY(10);

        if(this.left.isDown === true){
            this.phone.setVelocityX(-300);
        }

        if(this.right.isDown === true) {
            this.phone.setVelocityX(300);
        }

        if(this.left.isDown === false && this.right.isDown ===false){
            this.phone.setVelocityX(0);
        }

        if(this.space.isDown) {
            //shoot signal beams out
        }


    }


}