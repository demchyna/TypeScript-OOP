
export abstract class Shape {
    protected side: number;
    private name: string;

    constructor(side: number, name: string) {
        this.side = side;
        this.name = name;
    }

    abstract area(): number;

    shapeInfo(): void {
        console.log("This is " + this.name);
    }
}