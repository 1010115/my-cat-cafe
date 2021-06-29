import { GameCharacter } from "./GameCharacter.js";
export class Player extends GameCharacter {
    constructor() {
        super();
        this.verticalSpeed = 0;
        this.horizontalSpeed = 0;
        this.create();
        window.addEventListener("keydown", (e) => this.onKeyDown(e));
        window.addEventListener("keyup", (e) => this.onKeyUp(e));
        this.x = 0.5 * (window.innerWidth - this.div.clientHeight);
        this.y = 0.5 * (window.innerHeight - this.div.clientWidth);
    }
    create() {
        this.div = document.createElement("player");
        document.body.appendChild(this.div);
    }
    getFutureRect() {
        this.futurePos = this.div.getBoundingClientRect();
        this.futurePos.x += this.horizontalSpeed;
        this.futurePos.y += this.verticalSpeed;
        return this.futurePos;
    }
    updatePlayer() {
        this.y += this.verticalSpeed;
        this.x += this.horizontalSpeed;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    collisionBoundary() { }
    onKeyDown(e) {
        switch (e.key) {
            case "w":
            case "ArrowUp":
                this.verticalSpeed = -10;
                break;
            case "s":
            case "ArrowDown":
                this.verticalSpeed = 10;
                break;
            case "a":
            case "ArrowLeft":
                this.horizontalSpeed = -10;
                break;
            case "d":
            case "ArrowRight":
                this.horizontalSpeed = 10;
                break;
            case "p":
                console.log("pause");
                break;
        }
    }
    onKeyUp(e) {
        if (e.key == "ArrowUp" ||
            e.key == "ArrowDown" ||
            e.key == "w" ||
            e.key == "s") {
            this.verticalSpeed = 0;
        }
        if (e.key == "ArrowLeft" ||
            e.key == "ArrowRight" ||
            e.key == "a" ||
            e.key == "d") {
            this.horizontalSpeed = 0;
        }
        if (e.key == "p") {
            this.game.pauser();
        }
    }
}
//# sourceMappingURL=player.js.map