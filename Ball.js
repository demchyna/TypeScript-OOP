"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Shape_1 = require("./Shape");
var Ball = (function (_super) {
    __extends(Ball, _super);
    function Ball(side, name) {
        return _super.call(this, side, name) || this;
    }
    Ball.prototype.area = function () {
        return 4 * Math.PI * this.side * this.side;
    };
    Ball.prototype.shapeInfo = function () {
        _super.prototype.shapeInfo.call(this);
        console.log("\tRadius =  " + this.side);
    };
    return Ball;
}(Shape_1.Shape));
exports.Ball = Ball;
