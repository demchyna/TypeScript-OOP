"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Color_1 = require("./Color");
var Shape = /** @class */ (function () {
    function Shape(_type, _color) {
        if (_color === void 0) { _color = Color_1.Color.Black; }
        this._type = _type;
        this._color = _color;
    }
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            this._color = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "type", {
        get: function () {
            return this._type;
        },
        set: function (value) {
            this._type = value;
        },
        enumerable: true,
        configurable: true
    });
    Shape.prototype.shapeInfo = function () {
        console.log("This is " + this._type + " and it is " + this._color);
    };
    return Shape;
}());
exports.default = Shape;
