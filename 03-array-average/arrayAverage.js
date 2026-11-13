/*
Create an array called numbers and initialize it with numeric values.

Create a function called addNumber that accepts a number as a parameter.

The function should:
1. Validate that the input is a finite number using Number.isFinite().
2. Reject invalid input values, including strings, NaN, Infinity, and -Infinity.
3. Add valid numbers to the array.
4. Return a confirmation message using template literals.

Create a function called calculateAverage that accepts an array as a parameter.

The function should:
1. Check that the input is a non-empty array.
2. Validate that all array elements are finite numbers.
3. Calculate the average value of the array elements.
4. Return the result rounded to two decimal places.
5. Return an appropriate error message if the input is invalid or the array is empty.

Display the results in the console.
*/


let numbers = [1, 2, 3];

function addNumber(num) {
    if (!Number.isFinite(num)) {
        return "Invalid input: please enter a finite number";
    }

    numbers.push(num);
    return `The number ${num} was added to the array`;
}

function calculateAverage(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return "Invalid input: the array must not be empty";
    }

    if (!arr.every(Number.isFinite)) {
        return "Invalid input: the array must contain only finite numbers";
    }

    let a = arr.length;
    let sum = 0;

    for (let i of arr) {
        sum += i;
    }

    let avrg = sum / a;
    return avrg.toFixed(2);
}

console.log(addNumber(5));
console.log(calculateAverage(numbers));

// Additional test cases
console.log(addNumber("hello"));
console.log(addNumber(NaN));
console.log(addNumber(Infinity));
console.log(calculateAverage([]));
console.log(calculateAverage([1, 2, "hello"]));
