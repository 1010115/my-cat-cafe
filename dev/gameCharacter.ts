export class GameCharacter {
  private _div: HTMLElement;
  public get div(): HTMLElement {
    return this._div;
  }
  public set div(value: HTMLElement) {
    this._div = value;
  }
  protected x: number = 0;
  protected y: number = 0;
  public getBoundingRect(): DOMRect {
    return this.div.getBoundingClientRect();
  }

  constructor() {}
}
