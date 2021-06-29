import { GameCharacter } from "./GameCharacter.js";
export class Fish extends GameCharacter {
    constructor() {
        super();
        this.speed = 5;
        console.log("pew");
        this.x = this.player.getBoundingRect().right - 45;
        this.y = this.player.getBoundingRect().top - 80;
        this.create();
    }
    create() {
        this.div = document.createElement("fish");
        document.body.appendChild(this.div);
    }
    update() {
        this.x = this.player.horizontalSpeed;
        this.y = this.player.verticalSpeed;
        if (this.x > window.innerWidth || this.y > window.innerHeight) {
            this.game.removeFish(this);
        }
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
}
//# sourceMappingURL=fish.js.map