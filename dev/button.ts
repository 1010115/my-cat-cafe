import { GameCharacter } from "./GameCharacter.js";
import { Game } from "./Game.js";

export class Button extends GameCharacter {
  private game: Game;
  private buttonStates = ["download", "pause"];
  constructor() {
    super();
    this.div = document.createElement("button");
    this.div.className += `${this.buttonStates[1]}`;
    document.body.appendChild(this.div);
  }
  public buttonUpdate(number: number): void {
    if (number === 0) {
      this.div.classList.add("pause");
      this.div.classList.remove("download");
    } else {
      this.div.classList.add("download");
      this.div.classList.remove("pause");
    }
  }
}
