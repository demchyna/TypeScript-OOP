export abstract class Shape {
    private name: string = "My Shape";

    constructor(name?: string) {
        this.name = name;
    }

    abstract area(): number;

    shapeInfo(): void {
        console.log("This is " + this.name);
    }

    protected readonly PI: number = 3.15;
}