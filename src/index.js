class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(val) {
        const newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            const oldFirst = this.first;
            this.first = newNode;
            newNode.next = oldFirst;
        }
        return ++this.size;
    }

    pop() {
        if (!this.first) return null;
        const poped = this.first;
        if (this.size === 0) {
            this.first = null;
            this.last = null;
        } else {
            this.first = poped.next;
        }
        this.size--;
        return poped;
    }
}

const stack = new Stack();
stack.push('the old head');
stack.push('old head');
stack.push('head');

console.log(stack.pop());

// console.log(stack);
