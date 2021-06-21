class Stack {
    constructor() {
        this.items = []

        //functions that will be available for stack
        // push, pop, peek, isEmpty, clear, size
    }

    push(element) {
        this.items.push(element)
    }

    pop(element) {
        return this.items.pop()
    }

    peek() {
        return this.items[this.items.length -1]
    }

    isEmpty(){
        return this.items.length == 0
    }

    size()
    {
        return this.items.length
    }

    clear(){
        this.items = []
    }

}

const stack  = new Stack();

console.log("stack", stack.isEmpty())
stack.push(5)
stack.push(8)

console.log(stack.peek())

stack.push(11)
console.log("Size ", stack.size())
console.log("is Empty ", stack.isEmpty())