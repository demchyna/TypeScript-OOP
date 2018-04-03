export class Stack<T> {
    private storage: T[];
    private top: number = -1;

    public push(item: T): void {
        this.top++;
        this.storage[this.top] = item;
    }

    public pop(): T {
        if (this.top >= 0) {
            let item = this.storage[this.top];
            this.top--;
            return item;
        } else {
            throw new Error("Stack is empty!");
        }
    }

    public size(): number {
        return this.top + 1;
    }

    public isEmpty(): boolean {
        if (this.top >= 0) return false;
        else return true;
    }
}