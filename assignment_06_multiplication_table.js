// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
const readlineSync = require('readline-sync');

function printTable(num) {

    console.log('\nMultiplication Table for ' + num + ':');

    for (let i = 1; i <= 12; i++) {
        console.log(num + '  x  ' + i + '  =  ' + (num * i));
    }
}

// ── PART B: Print tables from 1 to N ──────────
function printAllTables(n) {

    if (n <= 0) {
        console.log('Error: Please enter a positive number.');
        return;
    }

    for (let i = 1; i <= n; i++) {
        printTable(i);

        if (i < n) {
            console.log('---------------------------');
        }
    }
}

console.log('==============================');
console.log('  Multiplication Table Menu   ');
console.log('==============================');
console.log('1. Single table');
console.log('2. Tables from 1 to N');

const choice = readlineSync.question('Choose (1 or 2): ');

if (choice === '1') {
    // Part A
    const num = parseInt(readlineSync.question('Enter a number: '));

    if (num <= 0) {
        console.log('Error: Please enter a positive number.');
    } else {
        printTable(num);
    }

} else if (choice === '2') {
    // Part B
    const n = parseInt(readlineSync.question('Enter N: '));
    printAllTables(n);

} else {
    console.log('Invalid choice.');
}


