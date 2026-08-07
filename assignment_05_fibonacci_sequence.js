// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 5
// =============================================================================
//
// TASK: Fibonacci Sequence Generator
const readlineSync = require('readline-sync');
function printFibonacci(n) {

    if (n <= 0) {
        console.log('Error: Please enter a positive number.');
        return;
    }

    let a = 0, b = 1;
    let output = '';

    for (let i = 0; i < n; i++) {
        output += a;
        if (i < n - 1) output += ' ';
        let next = a + b;
        a = b;
        b = next;
    }

    console.log('Fibonacci sequence: ' + output);
}

function checkFibonacci(num) {

    if (num < 0) {
        console.log(num + ' is NOT a Fibonacci number.');
        return;
    }

    let a = 0, b = 1;

    while (a < num) {
        let next = a + b;
        a = b;
        b = next;
    }

    if (a === num) {
        console.log(num + ' is a Fibonacci number.');
    } else {
        console.log(num + ' is NOT a Fibonacci number.');
    }
}


const n = parseInt(readlineSync.question('How many terms? '));
printFibonacci(n);

console.log('');

const num = parseInt(readlineSync.question('Enter a number to check: '));
checkFibonacci(num);

