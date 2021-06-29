import { GameCharacter } from "./GameCharacter.js";
import { Player } from "./player.js";
import { Game } from "./game.js";

export class Cat extends GameCharacter {
  private catSkins = ["cat1", "cat2", "cat3", "cat4", "cat5"];
  private randomNumber: number = Math.floor(
    Math.random() * this.catSkins.length
  );
  private catSkin: string = `${this.catSkins[this.randomNumber]}`;
  private _trust: number = Math.floor(Math.random() * 100);
  public get trust(): number {
    return this._trust;
  }
  public set trust(value: number) {
    this._trust = value;
  }

  constructor() {
    super();

    this.create();

    this.y = Math.floor(
      Math.random() * (window.innerHeight - this.div.clientHeight)
    );
    this.x = Math.floor(
      Math.random() * (window.innerWidth - this.div.clientWidth)
    );
    this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
  }

  private create(): void {
    this.div = document.createElement("cat");
    this.div.className += `${this.catSkin}`;
    document.body.appendChild(this.div);
  }

  public catBoundary(a: DOMRect): boolean {
    return (
      a.left <= this.getBoundingRect().right &&
      a.top <= this.getBoundingRect().bottom &&
      this.getBoundingRect().left <= a.right &&
      this.getBoundingRect().top <= a.bottom
    );
  }

  public pet(): void {
    this.trust -- 
    if (this.trust == 0){
    this.div.remove();
    }
  }
}
