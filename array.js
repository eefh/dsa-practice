let array = [];
array.push(...[4, 5, 3, 1, 2, 9, 2, 7, 7, 5, 3, 7]);
console.log(array);

//.at: takes integer value to represent index and returns the item in the array at the specified index value. It allows for negative numbers
console.log(array.at(3)); // Out: 1
console.log(array.at(-3)); // Out: 5
//.at can be a more readable alternative to specifying index using square brackets (array[array.length - 3] vs array.at(-3))

//.concat: merges an array with another array
let array2 = [4, 5, 6, 2, 1];
console.log(array2.concat(array));

let obj1 = {
    name: "jerry",
    age: 99,
    message: "hello",
};
let obj2 = {
    name: "harry",
    age: 200,
    message: "hi",
};
console.log([].concat(obj1, obj2));

//.copyWithin creates a shallow copy of the array and inserts it into the same array without modifying the array's length (target, start, end), if end isn't provided then it'll copy the rest of the array from start index

let copyTest = ["Hello", "Hi", "Yes", "No"];
console.log(copyTest.copyWithin(0, 2, 3));

//.entries returns an array iterator object that contains [key: index, value: value of array at index] pairs

//classic array iteration
for (const value of copyTest) {
    console.log(value);
}
//const using Array Iterator object
let arrayIt = copyTest.entries();

console.log(arrayIt.next().value);
console.log(arrayIt.next().value);
console.log(arrayIt.next().value);
console.log(arrayIt.next().value);

//.every tests whether all elements in the array pass the test implemented by the callback function
console.log(copyTest.every((item) => typeof item === "string"));

//.
