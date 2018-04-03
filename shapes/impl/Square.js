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
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    function Square(name, side) {
        var _this = _super.call(this, name) || this;
        _this.side = side;
        return _this;
    }
    Square.prototype.area = function () {
        return this.side * this.side;
    };
    Square.prototype.perimeter = function () {
        return 4 * this.side;
    };
    Square.prototype.shapeInfo = function () {
        _super.prototype.shapeInfo.call(this);
        console.log("\tSide =  " + this.side);
    };
    return Square;
}(Shape_1.Shape));
exports.Square = Square;
