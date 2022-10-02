const arr = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const findMax = (arr) => {
    return arr.length === 0 ? null : Math.max(arr[0], findMax(arr.splice(1)));
};

const sum = (arr) => {
    return arr.length === 0 ? 0 : arr[0] + sum(arr.splice(1));
};

const countOdd = (arr) => {
    return arr.length === 0 ? 0 : (arr[0] % 2) + countOdd(arr.splice(1));
};

const quickSort = (arr) => {
    return arr.length < 2
        ? arr
        : sortArr(arr.filter((n) => n < arr[1])).concat(
              arr[1],
              sortArr(arr.filter((n) => n > arr[1]))
          );
};
let sorted = quickSort(arr);

class Queue {
    constructor() {
        this.elements = {};
        this.head = 0;
        this.tail = 0;
    }

    enqueue(element) {
        this.elements[this.tail] = element;
        this.tail++;
    }
    dequeue() {
        const item = this.elements[this.head];
        delete this.elements[this.head];
        this.head++;
        return item;
    }
    peek() {
        return this.elements[this.head];
    }
    get length() {
        return this.tail - this.head;
    }
}

const graph = {
    ethan: { neighbors: ["drew", "chavez", "conner"], isMango: false },
    drew: { neighbors: ["ethan", "chavez", "conner"], isMango: false },
    chavez: { neighbors: ["ethan", "drew", "conner"], isMango: false },
    conner: {
        neighbors: ["ethan", "chavez", "drew", "mangodealer"],
        isMango: false,
    },
    mangodealer: { neighbors: ["conner"], isMango: true },
};
let queue = new Queue();
const BFS = (graph) => {
    let searched = [];
    let searchQueue = new Queue();
    graph.ethan.neighbors.forEach((i) => searchQueue.enqueue(i));
    while (searchQueue.length) {
        let person = searchQueue.dequeue();
        if (searched.every((n) => n !== person)) {
            if (graph[person].isMango) {
                console.log(`${person} is a mango seller`);
                return true;
            } else {
                graph[person].neighbors.forEach((i) => searchQueue.enqueue(i));
                searched.push(person);
            }
        }
    }
    return false;
};

graph.ethan.neighbors.forEach((i) => queue.enqueue(i));
console.log(BFS(graph));
console.log(sorted);
