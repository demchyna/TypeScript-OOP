import {Color} from "./Color";

export default abstract class Shape {

    constructor(private _type: string, private _color = Color.Black) {
    }

    get color(): Color {
        return this._color;
    }

    set color(value: Color) {
        this._color = value;
    }

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    abstract area(): number;

    shapeInfo(): void {
        console.log(`This is ${this._type} and it is ${this._color}` );
    }
}