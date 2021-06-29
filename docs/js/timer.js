import { GameCharacter } from "./GameCharacter.js";
export class Timer extends GameCharacter {
    constructor() {
        super();
        this.create();
        this.x = window.innerWidth - this.div.clientWidth;
        this.y = 0 - this.div.clientHeight;
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    update(Time) {
        this.div.innerText = `${Time}`;
    }
    create() {
        this.div = document.createElement("p");
        document.body.appendChild(this.div);
    }
}
//# sourceMappingURL=timer.js.map