//fib generation O(n^2);

const fib = (n) => {
    if (n <= 1) {
        return n;
    } else {
        return fib(n - 1) + fib(n - 2);
    }
};
//terrible
console.time("Fib");
console.log(fib(41));
console.timeEnd("Fib");
