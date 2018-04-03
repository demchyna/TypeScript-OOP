"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Stack = /** @class */ (function () {
    function Stack() {
        this.top = -1;
    }
    Stack.prototype.push = function (item) {
        this.top++;
        this.storage[this.top] = item;
    };
    Stack.prototype.pop = function () {
        if (this.top >= 0) {
            var item = this.storage[this.top];
            this.top--;
            return item;
        }
        else {
            throw new Error("Stack is empty!");
        }
    };
    Stack.prototype.size = function () {
        return this.top + 1;
    };
    Stack.prototype.isEmpty = function () {
        if (this.top >= 0)
            return false;
        else
            return true;
    };
    return Stack;
}());
exports.Stack = Stack;
