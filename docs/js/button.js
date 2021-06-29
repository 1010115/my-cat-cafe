import { GameCharacter } from "./GameCharacter.js";
export class Button extends GameCharacter {
    constructor() {
        super();
        this.buttonStates = ["download", "pause"];
        this.div = document.createElement("button");
        this.div.className += `${this.buttonStates[1]}`;
        document.body.appendChild(this.div);
    }
    buttonUpdate(number) {
        if (number === 0) {
            this.div.classList.add("pause");
            this.div.classList.remove("download");
        }
        else {
            this.div.classList.add("download");
            this.div.classList.remove("pause");
        }
    }
}
//# sourceMappingURL=button.js.map