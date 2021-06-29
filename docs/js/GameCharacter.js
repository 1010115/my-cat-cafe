export class GameCharacter {
    constructor() {
        this.x = 0;
        this.y = 0;
    }
    get div() {
        return this._div;
    }
    set div(value) {
        this._div = value;
    }
    getBoundingRect() {
        return this.div.getBoundingClientRect();
    }
}
//# sourceMappingURL=GameCharacter.js.map