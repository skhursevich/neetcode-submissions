class MinStack {
    stack: Array<{ value: number; min: number }>;

    constructor() {
        this.stack = [];
    }

    /**
     * @param {number} val
     * @return {void}
     */
    push(val: number): void {
        if (this.stack.length === 0) {
            this.stack.push({ value: val, min: val });
        }

        const min = Math.min(val, this.stack[this.stack.length - 1].min);
        this.stack.push({ value: val, min });
    }

    /**
     * @return {void}
     */
    pop(): void {
        this.stack.pop();
    }

    /**
     * @return {number}
     */
    top(): number {
        return this.stack[this.stack.length - 1].value;
    }

    /**
     * @return {number}
     */
    getMin(): number {
        return this.stack[this.stack.length - 1].min;
    }
}
