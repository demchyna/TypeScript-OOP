import Shape from "./Shape";
import {Color} from "./Color";

export default class Square extends Shape {
    //private _side: number = 1.0;

    constructor(private _type: string, private _color?: Color,  private _side = 1) {
        super(_type, _color);
        if (_side < 0) throw new Error("Bad side!");
    }

    get side(): number {
        return this._side;
    }

    set side(side: number) {
        if (side >= 0) this._side = side;
        else throw new Error("Bad side!");
    }

    area(): number {
        return Math.pow(this._side, 2);
    }

    shapeInfo(): void {
        super.shapeInfo();
        console.log(`\tSide = ${this._side}`);
    }
}