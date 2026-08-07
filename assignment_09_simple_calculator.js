// =============================================================================
// =============================================================================
//
// TASK: Console-Based Simple Calculator
//
// Assignment 9 - Simple Calculator
const readlineSync = require('readline-sync');

function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    if (b === 0) return null;
    return a / b;
}

function modulus(a, b) {
    if (b === 0) return null;
    return a % b;
}

function exponentiate(a, b) {
    return Math.pow(a, b);
}

function showMenu() {
    console.log('\n============================');
    console.log('      SIMPLE CALCULATOR     ');
    console.log('============================');
    console.log('1. Addition');
    console.log('2. Subtraction');
    console.log('3. Multiplication');
    console.log('4. Division');
    console.log('5. Modulus');
    console.log('6. Exponentiation');
    console.log('7. Quit');
}

while (true) {

    showMenu();
    const choice = readlineSync.question('Select an operation (1-7): ');

    if (choice === '7') {
        console.log('Goodbye!');
        break;
    }

    if (choice < '1' || choice > '7') {
        console.log('Invalid choice. Please enter 1-7.');
        continue;
    }

    const a = parseFloat(readlineSync.question('Enter first number : '));
    const b = parseFloat(readlineSync.question('Enter second number: '));

    if (choice === '1') {
        console.log('Result: ' + a + ' + ' + b + ' = ' + add(a, b).toFixed(2));

    } else if (choice === '2') {
        console.log('Result: ' + a + ' - ' + b + ' = ' + subtract(a, b).toFixed(2));

    } else if (choice === '3') {
        console.log('Result: ' + a + ' * ' + b + ' = ' + multiply(a, b).toFixed(2));

    } else if (choice === '4') {
        const result = divide(a, b);
        if (result === null) {
            console.log('Error: Cannot divide by zero.');
        } else {
            console.log('Result: ' + a + ' / ' + b + ' = ' + result.toFixed(2));
        }

    } else if (choice === '5') {
        const result = modulus(a, b);
        if (result === null) {
            console.log('Error: Cannot divide by zero.');
        } else {
            console.log('Result: ' + a + ' % ' + b + ' = ' + result);
        }

    } else if (choice === '6') {
        console.log('Result: ' + a + ' ^ ' + b + ' = ' + exponentiate(a, b).toFixed(2));
    }
}