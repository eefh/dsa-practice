const checkSort = (arr) => {
    return arr.every((e, i) => e > arr[i - 1] || arr[i - 1] === undefined);
};
console.log(checkSort([1, 3, 4, 5, 6]));
