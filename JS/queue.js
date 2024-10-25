class Queue {
    constructor(){
        this.items = [];
    }
    enqueue(element){
        this.items.push(element);
    }
    dequeue(){
        return this.items.shift()
    }
    isEmpty(){
        return this.items.length  === 0;
    }
    peek(){
        return !this.isEmpty() ? this.items[0] : "There is no element";
    }
    size(){
        return this.items.length;
    }
    print(){
       return !this.isEmpty() ? this.items.toString() : null
    }
}

 
const queue = new Queue();
queue.enqueue(15);
queue.enqueue(25);
queue.enqueue(35);
queue.enqueue(45);
console.log(queue.isEmpty());
console.log(queue.print());
console.log(queue.size())
