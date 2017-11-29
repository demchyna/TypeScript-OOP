"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = require("./Square");
var Ball_1 = require("./Ball");
function main() {
    var square = new Square_1.Square(24.6, "My Square");
    var ball = new Ball_1.Ball(15.7, "My Ball");
    square.shapeInfo();
    console.log(square.area());
    ball.shapeInfo();
    console.log(ball.area());
}
main();
