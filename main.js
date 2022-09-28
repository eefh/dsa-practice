const arr = [9, 8, 7, 6, 5, 4, 3, 2 ,1];

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
  return arr.length < 2 ? arr : quickSort(arr.filter((n) => n < arr[0])).concat(arr[0], quickSort(arr.filter((n) => n > arr[0])));
};
console.log(quickSort(arr));
