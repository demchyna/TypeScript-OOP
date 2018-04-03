import {Shape} from "../Shape";
import {IPerimeter} from "../IPerimeter";

export class Circle extends Shape implements IPerimeter{

    private radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    area(): number {
        return this.PI * this.radius * this.radius;
    }


    perimeter(): number {
        return 2 * this.PI * this.radius;
    }

    shapeInfo(): void {
        super.shapeInfo();
        console.log("\tRadius =  " + this.radius);
    }
}