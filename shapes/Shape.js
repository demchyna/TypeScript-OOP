"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Shape = /** @class */ (function () {
    function Shape(name) {
        this.name = "My Shape";
        this.PI = 3.15;
        this.name = name;
    }
    Shape.prototype.shapeInfo = function () {
        console.log("This is " + this.name);
    };
    return Shape;
}());
exports.Shape = Shape;
