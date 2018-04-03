import {Shape} from "../Shape";
import {IPerimeter} from "../IPerimeter";

export class Square extends Shape implements IPerimeter{

    private side: number;

    constructor(name: string, side: number) {
        super(name);
        this.side = side;
    }

    area(): number {
        return this.side * this.side;
    }

    perimeter(): number {
        return 4 * this.side;
    }

    shapeInfo(): void {
        super.shapeInfo();
        console.log("\tSide =  " + this.side);
    }
}