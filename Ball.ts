import {Shape} from "./Shape";

export class Ball extends Shape {

    constructor(side: number, name: string) {
        super(side, name);
    }

    area(): number {
        return 4 * Math.PI * this.side * this.side;
    }

    shapeInfo(): void {
        super.shapeInfo();
        console.log("\tRadius =  " + this.side);
    }

}