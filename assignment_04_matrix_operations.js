// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 4
// =============================================================================
//
// TASK: Matrix Operations
const readlineSync = require('readline-sync');

// ── HELPER: Print matrix neatly ───────────────
function printMatrix(matrix) {
    for (let i = 0; i < matrix.length; i++) {
        let row = '';
        for (let j = 0; j < matrix[i].length; j++) {
            row += String(matrix[i][j]).padStart(5);
        }
        console.log(row);
    }
}

// ── HELPER: Read matrix from user ─────────────
// User types entire row at once e.g. "1 2 3"
function readMatrix(rows, cols) {
    let matrix = [];

    for (let i = 0; i < rows; i++) {
        let input = readlineSync.question(`Enter row ${i + 1}: `);

        // Split "1 2 3" into [1, 2, 3]
        let row = input.split(' ').map(Number);
        matrix.push(row);
    }

    return matrix;
}

// ── PART A: Transpose ─────────────────────────
function transposeMatrix(matrix, rows, cols) {

    // Create empty transposed matrix (cols x rows)
    let transposed = [];
    for (let i = 0; i < cols; i++) {
        transposed.push(new Array(rows).fill(0));
    }

    // Flip rows and columns
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            transposed[j][i] = matrix[i][j];
        }
    }

    console.log('\nOriginal Matrix:');
    printMatrix(matrix);
    console.log('\nTransposed Matrix:');
    printMatrix(transposed);
}

// ── PART B: Add Two Matrices ──────────────────
function addMatrices(A, B, rows, cols) {

    let result = [];

    for (let i = 0; i < rows; i++) {
        let row = [];
        for (let j = 0; j < cols; j++) {
            row.push(A[i][j] + B[i][j]);   // add matching elements
        }
        result.push(row);
    }

    console.log('\nMatrix A:');
    printMatrix(A);
    console.log('\nMatrix B:');
    printMatrix(B);
    console.log('\nA + B =');
    printMatrix(result);
}

// ── PART C: Multiply Two Matrices ─────────────
function multiplyMatrices(A, B, M, N, P) {

    // Initialise result matrix with zeros (M x P)
    let result = [];
    for (let i = 0; i < M; i++) {
        result.push(new Array(P).fill(0));
    }

    // Triple nested loop
    for (let i = 0; i < M; i++) {
        for (let j = 0; j < P; j++) {
            for (let k = 0; k < N; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }

    console.log('\nMatrix A:');
    printMatrix(A);
    console.log('\nMatrix B:');
    printMatrix(B);
    console.log('\nA x B =');
    printMatrix(result);
}

// ── MAIN MENU ─────────────────────────────────
console.log('==============================');
console.log('    Matrix Operations Menu    ');
console.log('==============================');
console.log('1. Transpose a Matrix');
console.log('2. Add Two Matrices');
console.log('3. Multiply Two Matrices');

let choice = readlineSync.question('Choose (1-3): ');

if (choice === '1') {
    // Part A
    let rows = parseInt(readlineSync.question('Enter number of rows: '));
    let cols = parseInt(readlineSync.question('Enter number of columns: '));
    let matrix = readMatrix(rows, cols);
    transposeMatrix(matrix, rows, cols);

} else if (choice === '2') {
    // Part B
    let rows = parseInt(readlineSync.question('Enter number of rows: '));
    let cols = parseInt(readlineSync.question('Enter number of columns: '));
    console.log('\n-- Enter Matrix A --');
    let A = readMatrix(rows, cols);
    console.log('\n-- Enter Matrix B --');
    let B = readMatrix(rows, cols);
    addMatrices(A, B, rows, cols);

} else if (choice === '3') {
    // Part C
    let M = parseInt(readlineSync.question('Rows of A (M): '));
    let N = parseInt(readlineSync.question('Columns of A / Rows of B (N): '));
    let P = parseInt(readlineSync.question('Columns of B (P): '));
    console.log('\n-- Enter Matrix A --');
    let A = readMatrix(M, N);
    console.log('\n-- Enter Matrix B --');
    let B = readMatrix(N, P);
    multiplyMatrices(A, B, M, N, P);

} else {
    console.log('Invalid choice.');
}
