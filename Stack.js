var Stack = (function () {
    function Stack() {
        this.storage = [];
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
    Stack.prototype.topOf = function () {
        return this.top;
    };
    return Stack;
}());
function main() {
    var stack = new Stack();
    stack.push(156);
    stack.push(342);
    stack.push(846);
    //console.log(stack.top);
    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());
}
main();
