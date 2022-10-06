let arr = [3, 4, 5, 6, 7, 8];

const printAlternating = (arr) => {
    let printed = [];
    for (let i = 0; i < arr.length; i++) {
        if (!printed.some((k) => k === arr[i])) {
            console.log(arr[i]);
            printed.push(arr[i]);
        }
        if (arr[i + 2] && !printed.some((k) => k === arr[i + 2])) {
            console.log(arr[i + 2]);
            printed.push(arr[i + 2]);
        }
    }
};

printAlternating(arr);
