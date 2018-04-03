import {Shape} from "./shapes/Shape";
import {Square} from "./shapes/impl/Square";
import {Ball} from "./shapes/impl/Ball";
import {Rectangle} from "./shapes/impl/Rectangle";
import {Circle} from "./shapes/impl/Circle";
import {Cube} from "./shapes/impl/Cube";
import {Stack} from "./container/Stack";
import {IPerimeter} from "./shapes/IPerimeter";
import {IVolume} from "./shapes/IVolume";

function main(): void {

    let stack = new Stack<Shape>();

    stack.push(new Square("My Square", 24.6));
    stack.push(new Ball("My Ball", 15.7));
    stack.push(new Rectangle("My Rectangle", 14.5, 12.8));
    stack.push(new Circle("My Circle", 16.4));
    stack.push(new Cube("My Cube", 11.3));

    while (!stack.isEmpty()) {
        let shape: Shape = stack.pop();
        shape.shapeInfo();
        console.log("\tArea = " + shape.area());

        if (hasPerimeter(shape)) {
            console.log("\tPerimeter = " + shape.perimeter());
        }

        if (hasVolume(shape)) {
            console.log("\tVolume = " + shape.volume());
        }
    }
}

function hasPerimeter(shape: any): shape is IPerimeter {
    return (shape as IPerimeter).perimeter !== undefined;
}

function hasVolume(shape: any): shape is IVolume {
    return (shape as IVolume).volume !== undefined;
}


function wrapper<T, V extends T>(arg: V): T {
    return arg;
}


main();