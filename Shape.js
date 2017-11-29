"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = (function () {
    function Shape(side, name) {
        this.side = side;
        this.name = name;
    }
    Shape.prototype.shapeInfo = function () {
        console.log("This is " + this.name);
    };
    return Shape;
}());
exports.Shape = Shape;
