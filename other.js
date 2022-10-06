function minimalHeaviestSetA(arr) {
    // Write your code here
    let a = [];
    let b = [];
    for (let i = 0; i < arr.length; i++) {}
    return a;
}
const arr = [4, 9, 5, 3, 2];

const arrSum = (arr) => {
    return arr.reduce((a, b) => a + b);
};
const sortArr = (arr) => {
    return arr.length < 2
        ? arr
        : sortArr(arr.filter((n) => n < arr[0])).concat(
              arr[0],
              sortArr(arr.filter((n) => n > arr[0]))
          );
};

function minimalHeaviestSetA(arr) {
    // Write your code here
    let sorted = sortArr(arr).reverse();
    let a = [];
    let b = [];
    for (let i = 1; i < arr.length; i++) {
        a = sorted.slice(0, i);
        b = sorted.slice(i);
        if (arrSum(a) > arrSum(b)) {
            return a.reverse();
        }
    }
    return a;
}
let array = [3, 7, 5, 6, 2, 2];
console.log(array.sort());

let a = {
    i: 1,
    valueOf() {
        return this.i;
    },
};

if (a == 1) {
    console.log(true);
}

class HashMap {
    getItem = (key) => {};
}
