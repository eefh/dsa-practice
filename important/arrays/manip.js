const search = (arr, item) => {
    return arr.some((i) => i === item);
};

const insert = (arr, item) => {
    arr.push(item);
    return true;
};

const del = (arr, index) => {
    arr.splice(index, 1);
    return true;
};

let arr = [];

console.log(arr);
insert(arr, 3);
insert(arr, 9);
insert(arr, 16);
insert(arr, 32);
console.log(arr);
del(arr, 0);
console.log(arr);
console.log(search(arr, 16));
