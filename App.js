"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = require("./shapes/impl/Square");
var Ball_1 = require("./shapes/impl/Ball");
var Rectangle_1 = require("./shapes/impl/Rectangle");
var Circle_1 = require("./shapes/impl/Circle");
var Cube_1 = require("./shapes/impl/Cube");
var Stack_1 = require("./container/Stack");
function main() {
    var stack = new Stack_1.Stack();
    stack.push(new Square_1.Square("My Square", 24.6));
    stack.push(new Ball_1.Ball("My Ball", 15.7));
    stack.push(new Rectangle_1.Rectangle("My Rectangle", 14.5, 12.8));
    stack.push(new Circle_1.Circle("My Circle", 16.4));
    stack.push(new Cube_1.Cube("My Cube", 11.3));
    while (!stack.isEmpty()) {
        var shape = stack.pop();
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
function hasPerimeter(shape) {
    return shape.perimeter !== undefined;
}
function hasVolume(shape) {
    return shape.volume !== undefined;
}
function wrapper(arg) {
    return arg;
}
main();
