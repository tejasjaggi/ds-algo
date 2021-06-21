class Stack {
    constructor() {
        this.count = 0
        this.items = {}
    }

    push(element) {
        this.items[this.count] = element;
        this.count++
    }

    size() {
        return this.count
    }

    isEmpty() {
        return this.count == 0
    }

    pop() {
        if (this.items.isEmpty()) {
            return undefined
        }
        this.count--
        const result = this.items[this.count]
        delete this.items[this.count]
        return result
    }

    peek() {
        return this.items[this.count - 1]
    }

    clear() {
        this.items = {}
        this.count = 0
    }
}