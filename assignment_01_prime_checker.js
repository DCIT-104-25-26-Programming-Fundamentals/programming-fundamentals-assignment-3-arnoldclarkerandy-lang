const readlineSync = require('readline-sync');

function isPrime(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false;
    }
    return true;
}

const number = parseInt(readlineSync.question('Enter a number: '));

if (isPrime(number)) {
    console.log(number + ' is a prime number.');
} else {
    console.log(number + ' is NOT a prime number.');
}