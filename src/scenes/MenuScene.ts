import { CST } from "../CST";
export class MenuScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.MENU
        })
    }
    init() {

    }

    preload() {

    }

    create() {
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * .4, "logo");
        this.add.image(this.game.renderer.width / 2, this.game.renderer.height * .6, "the_game");
        let startButton = this.add.image(this.game.renderer.width / 2, this.game.renderer.height * .75, "start_button");
        startButton.setInteractive();

        startButton.on("pointerover", () => {
            console.log("HOVER");
        })

        startButton.on("pointerup", () => {
            console.log("ponter up");
            this.scene.start(CST.SCENES.GAME);
        })

    }
  
}