import {Shape} from "./Shape";

export class Square extends Shape {

    constructor(side: number, name: string) {
        super(side, name);
    }

    area(): number {
        return this.side * this.side;
    }

    /*perimeter(): number {
        return 4 * this.side;
    }*/

    shapeInfo(): void {
        super.shapeInfo();
        console.log("\tSide =  " + this.side);
    }
}