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
var Shape_1 = require("../Shape");
var Ball = /** @class */ (function (_super) {
    __extends(Ball, _super);
    function Ball(name, radius) {
        var _this = _super.call(this, name) || this;
        _this.radius = radius;
        return _this;
    }
    Ball.prototype.area = function () {
        return 4 * this.PI * this.radius * this.radius;
    };
    Ball.prototype.volume = function () {
        return 3 / 4 * this.PI * Math.pow(this.radius, 3);
    };
    Ball.prototype.shapeInfo = function () {
        _super.prototype.shapeInfo.call(this);
        console.log("\tRadius =  " + this.radius);
    };
    return Ball;
}(Shape_1.Shape));
exports.Ball = Ball;
