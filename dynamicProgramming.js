//longest increasing subsequence
const testArr = [3, 1, 8, 2, 5];
const LIS = (arr) => {
    let graph = {};
    for (let i = 0; i < testArr.length; i++) {
        if (testArr[i + 1] > testArr[i]) {
        }
    }
    return arr;
};

console.log(LIS(testArr));

//generate fib

const fib = (n) => {
    let sum = [0, 1];
    let pass = 0;
    while (pass < n) {
        let summed = sum[0] + sum[1];
        sum[0] = sum[1];
        sum[1] = summed;
        pass++;
    }
    return sum[1];
};
console.time("Fibonacci");
console.log(fib(99999999));
console.timeEnd("Fibonacci");
