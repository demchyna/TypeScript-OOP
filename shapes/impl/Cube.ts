import {Shape} from "../Shape";
import {IPerimeter} from "../IPerimeter";
import {IVolume} from "../IVolume";

export class Cube extends Shape implements IPerimeter, IVolume {

    private side: number;

    constructor(name: string, side: number) {
        super(name);
        this.side = side;
    }

    area(): number {
        return 6 * this.side * this.side;
    }

    perimeter(): number {
        return 12 * this.side;
    }

    volume(): number {
        return Math.pow(this.side, 3);
    }

    shapeInfo(): void {
        super.shapeInfo();
        console.log("\tSide =  " + this.side);
    }
}