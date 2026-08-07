// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator5
const readlineSync = require('readline-sync');

function calculateSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
}

function calculateAverage(arr) {
    return calculateSum(arr) / arr.length;
}

function findMax(arr) {
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
    }
    return max;
}

function findMin(arr) {
    let min = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) min = arr[i];
    }
    return min;
}

const n = parseInt(readlineSync.question('How many numbers? '));

if (n <= 0) {
    console.log('Error: Please enter a positive number.');
} else {
    let arr = [];

    for (let i = 1; i <= n; i++) {
        let num = parseFloat(readlineSync.question('Enter number ' + i + ': '));
        arr.push(num);
    }

    console.log('\nResults:');
    console.log('Sum:     ' + calculateSum(arr));
    console.log('Average: ' + calculateAverage(arr).toFixed(1));
    console.log('Maximum: ' + findMax(arr));
    console.log('Minimum: ' + findMin(arr));
}