import { Player } from "./player.js";
import { Cat } from "./cat.js";
import { Button } from "./button.js";
import { Timer } from "./timer.js";
import { GameCharacter } from "./GameCharacter.js";

export class Game {
  private endGame:number = 3600 
  private player: Player;
  private button: Button;
  private cats: Cat[] = [];
  private spawnCounter: number = 0;
  private collected: Cat[] = [];
  private _pause: boolean = false;
  private timer: Timer;
  public get pause(): boolean {
    return this._pause;
  }
  public set pause(value: boolean) {
    this._pause = value;
  }

  constructor() {
    this.player = new Player();
    this.button = new Button();
    this.timer = new Timer();

    for (let i = 0; i < 5; i++) {
      this.cats.push(new Cat());
    }
    this.button.div.addEventListener("click", (e: MouseEvent) => this.pauser());
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyDown(e));
    this.player.updatePlayer();

    this.gameLoop();
  }

  public gameBoundary(a: DOMRect): boolean {
    return (
      a.right >= window.innerWidth ||
      a.left <= 0 ||
      a.bottom >= window.innerHeight ||
      a.top <= 0
    );
  }

  private onKeyDown(e: KeyboardEvent): void {
    switch (e.key) {
      case "p":
        this.pauser();
    }
  }
  public pauser(): void {
    if (this.pause === false) {
      this.button.buttonUpdate(1);
      this.pause = true;
    } else {
      this.button.buttonUpdate(0);
      this.pause = false;
      this.gameLoop();
    }
  }

  private removeFromPool(removedCat: Object): void {
    this.cats = this.cats.filter((cat) => cat !== removedCat);
  }

  private gameLoop(): void {
    let colliding = false;

    if (this.gameBoundary(this.player.getFutureRect())) {
      colliding = true;
    } else {
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

      if (this.endGame >= 0){
      this.endGame--
      }
        let secondsLeft = Math.floor(this.endGame / 60)
        this.timer.update(secondsLeft)
        if(this.endGame <= 0) {
            
            console.log("Endgame")
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
