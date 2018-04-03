import {Shape} from "../Shape";
import {IVolume} from "../IVolume";

export class Ball extends Shape implements IVolume{

    private radius: number;

    constructor(name: string, radius: number) {
        super(name);
        this.radius = radius;
    }

    area(): number {
        return 4 * this.PI * this.radius * this.radius;
    }

    volume(): number {
        return 3/4 * this.PI * Math.pow(this.radius, 3);
    }

    shapeInfo(): void {
        super.shapeInfo();
        console.log("\tRadius =  " + this.radius);
    }
}