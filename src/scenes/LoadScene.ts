import { CST } from "../CST";
import { MenuScene } from "./MenuScene";
export class LoadScene extends Phaser.Scene {
    constructor() {
        super({
            key: CST.SCENES.LOAD
        })
    }
    init() { }
    preload() {
        this.load.image("logo", "./assets/sonos_logo.jpg");
        this.load.image("the_game", "./assets/THE_GAME.png");
        this.load.image("start_button", "./assets/start_button.png");
        this.load.image("sea", "./assets/seattle_skyline_8bit.jpg");
        this.load.image("phone", "./assets/iphone.png");
        this.load.atlas("one","./assets/sonos_one_atlas.png", "./assets/sonos_one.json");
        this.load.atlas("five","./assets/five_atlas.png", "./assets/five.json");
        this.load.image("radar","./assets/radar.png"); 


        let loadingBar = this.add.graphics({
            fillStyle: {
                color: 0xffffff //white
            }
        })

        this.load.on("progress", (percent) => {
            loadingBar.fillRect(0, this.game.renderer.height / 2, this.game.renderer.width * percent, 50);

            console.log(percent);
        })
        this.load.on("complete", () => {

        })

    }
    create() {

        this.scene.start(CST.SCENES.MENU);
    }
}