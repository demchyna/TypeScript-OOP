class Stack {
    private storage: number[] = [];
    private top: number = -1;

    public push(item: number): void {
        this.top++;
        this.storage[this.top] = item;
    }

    pop(): number {
        if (this.top >= 0) {
            let item = this.storage[this.top];
            this.top--;
            return item;
        } else {
            throw new Error("Stack is empty!");
        }
    }

    topOf(): number {
        return this.top;
    }
}

function main(): void {

    let stack: Stack = new Stack();

    stack.push(156);
    stack.push(342);
    stack.push(846);

    //console.log(stack.top);

    console.log(stack.pop());
    console.log(stack.pop());
    console.log(stack.pop());




}

main();