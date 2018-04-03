import {Shape} from "../Shape";
import {IPerimeter} from "../IPerimeter";

export class Rectangle extends Shape implements IPerimeter{

    private width: number;
    private height: number;

    constructor(name: string, width: number, height: number) {
        super(name);
        this.width = width;
        this.height = height;
    }

    area(): number {
        return this.width * this.height;
    }

    perimeter(): number {
        return 2 * this.width * this.height;
    }

    shapeInfo(): void {
        super.shapeInfo();
        console.log("\tWidth =  " + this.width);
        console.log("\tHeight =  " + this.height);

    }
}