import { Player } from "./player.js";
import { Cat } from "./cat.js";
import { Button } from "./button.js";
import { Timer } from "./timer.js";
export class Game {
    constructor() {
        this.endGame = 3600;
        this.cats = [];
        this.spawnCounter = 0;
        this.collected = [];
        this._pause = false;
        this.player = new Player();
        this.button = new Button();
        this.timer = new Timer();
        for (let i = 0; i < 5; i++) {
            this.cats.push(new Cat());
        }
        this.button.div.addEventListener("click", (e) => this.pauser());
        window.addEventListener("keyup", (e) => this.onKeyDown(e));
        this.player.updatePlayer();
        this.gameLoop();
    }
    get pause() {
        return this._pause;
    }
    set pause(value) {
        this._pause = value;
    }
    gameBoundary(a) {
        return (a.right >= window.innerWidth ||
            a.left <= 0 ||
            a.bottom >= window.innerHeight ||
            a.top <= 0);
    }
    onKeyDown(e) {
        switch (e.key) {
            case "p":
                this.pauser();
        }
    }
    pauser() {
        if (this.pause === false) {
            this.button.buttonUpdate(1);
            this.pause = true;
        }
        else {
            this.button.buttonUpdate(0);
            this.pause = false;
            this.gameLoop();
        }
    }
    removeFromPool(removedCat) {
        this.cats = this.cats.filter((cat) => cat !== removedCat);
    }
    gameLoop() {
        let colliding = false;
        if (this.gameBoundary(this.player.getFutureRect())) {
            colliding = true;
        }
        else {
            for (let cat of this.cats) {
                if (cat.catBoundary(this.player.getFutureRect())) {
                    colliding = true;
                    cat.pet();
                    if (cat.trust == 0) {
                        this.collected.push(cat);
                        this.removeFromPool(cat);
                    }
                }
            }
            if (this.endGame >= 0) {
                this.endGame--;
            }
            let secondsLeft = Math.floor(this.endGame / 60);
            this.timer.update(secondsLeft);
            if (this.endGame <= 0) {
                console.log("Endgame");
            }
        }
        if (!colliding) {
            this.player.updatePlayer();
        }
        this.spawnCounter++;
        if (this.spawnCounter > 120) {
            this.spawnCounter = 0;
            this.cats.push(new Cat());
        }
        if (!this.pause) {
            requestAnimationFrame(() => this.gameLoop());
        }
    }
}
new Game();
//# sourceMappingURL=game.js.map