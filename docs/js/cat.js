import { GameCharacter } from "./GameCharacter.js";
export class Cat extends GameCharacter {
    constructor() {
        super();
        this.catSkins = ["cat1", "cat2", "cat3", "cat4", "cat5"];
        this.randomNumber = Math.floor(Math.random() * this.catSkins.length);
        this.catSkin = `${this.catSkins[this.randomNumber]}`;
        this._trust = Math.floor(Math.random() * 100);
        this.create();
        this.y = Math.floor(Math.random() * (window.innerHeight - this.div.clientHeight));
        this.x = Math.floor(Math.random() * (window.innerWidth - this.div.clientWidth));
        this.div.style.transform = `translate(${this.x}px, ${this.y}px)`;
    }
    get trust() {
        return this._trust;
    }
    set trust(value) {
        this._trust = value;
    }
    create() {
        this.div = document.createElement("cat");
        this.div.className += `${this.catSkin}`;
        document.body.appendChild(this.div);
    }
    catBoundary(a) {
        return (a.left <= this.getBoundingRect().right &&
            a.top <= this.getBoundingRect().bottom &&
            this.getBoundingRect().left <= a.right &&
            this.getBoundingRect().top <= a.bottom);
    }
    pet() {
        this.trust--;
        if (this.trust == 0) {
            this.div.remove();
        }
    }
}
//# sourceMappingURL=Cat.js.map