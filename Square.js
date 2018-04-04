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
var Square = /** @class */ (function (_super) {
    __extends(Square, _super);
    //private _side: number = 1.0;
    function Square(_type, _color, _side) {
        if (_side === void 0) { _side = 1; }
        var _this = _super.call(this, _type, _color) || this;
        _this._type = _type;
        _this._color = _color;
        _this._side = _side;
        if (_side < 0)
            throw new Error("Bad side!");
        return _this;
    }
    Object.defineProperty(Square.prototype, "side", {
        get: function () {
            return this._side;
        },
        set: function (side) {
            if (side >= 0)
                this._side = side;
            else
                throw new Error("Bad side!");
        },
        enumerable: true,
        configurable: true
    });
    Square.prototype.area = function () {
        return Math.pow(this._side, 2);
    };
    Square.prototype.shapeInfo = function () {
        _super.prototype.shapeInfo.call(this);
        console.log("\tSide = " + this._side);
    };
    return Square;
}(Shape_1.default));
exports.default = Square;
