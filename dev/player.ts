import { GameCharacter } from "./GameCharacter.js";
import { Game } from "./Game.js";
import { Cat } from "./Cat.js";

export class Player extends GameCharacter {
  private verticalSpeed: number = 0;
  private horizontalSpeed: number = 0;
  private futurePos: DOMRect;
  private game: Game;
  private cat: Cat;

  constructor() {
    super();
    this.create();

    window.addEventListener("keydown", (e: KeyboardEvent) => this.onKeyDown(e));
    window.addEventListener("keyup", (e: KeyboardEvent) => this.onKeyUp(e));

    this.x = 0.5 * (window.innerWidth - this.div.clientHeight);
    this.y = 0.5 * (window.innerHeight - this.div.clientWidth);
  }

  private create(): void {
    this.div = document.createElement("player");
    document.body.appendChild(this.div);
  }

  public getFutureRect(): DOMRect {
    this.futurePos = this.div.getBoundingClientRect();
    this.futurePos.x += this.horizontalSpeed;
    this.futurePos.y += this.verticalSpeed;
    return this.futurePos;
  }

  public updatePlayer(): void {
    this.y += this.verticalSpeed;
    this.x += this.horizontalSpeed;

    this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  public collisionBoundary(): void {}

  private onKeyDown(e: KeyboardEvent): void {
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
  private onKeyUp(e: KeyboardEvent): void {
    if (
      e.key == "ArrowUp" ||
      e.key == "ArrowDown" ||
      e.key == "w" ||
      e.key == "s"
    ) {
      this.verticalSpeed = 0;
    }
    if (
      e.key == "ArrowLeft" ||
      e.key == "ArrowRight" ||
      e.key == "a" ||
      e.key == "d"
    ) {
      this.horizontalSpeed = 0;
    }
    if (e.key == "p"){
      this.game.pauser();
    }
  }
}
