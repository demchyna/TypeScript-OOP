"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Square_1 = require("./Square");
var Color_1 = require("./Color");
function main() {
    var square = new Square_1.default("Square", Color_1.Color.Blue, 5.28);
    //console.log(square.side);
    square.shapeInfo();
    //let shape = new Shape();
}
/*function hasPerimeter(shape: any): shape is IPerimeter {
    return (shape as IPerimeter).perimeter !== undefined;
}*/
/*function hasVolume(shape: any): shape is IVolume {
    return (shape as IVolume).volume !== undefined;
}*/
main();
