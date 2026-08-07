// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 8
// =============================================================================
// TASK: Student Records Management
const readlineSync = require('readline-sync');

let students = [];

function calculateAverage(scores) {
    if (scores.length === 0) return 0;

    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / scores.length;
}

function showMenu() {
    console.log('\n================================');
    console.log('   STUDENT RECORD SYSTEM MENU  ');
    console.log('================================');
    console.log('1. Add student');
    console.log('2. Display all students');
    console.log('3. Calculate average score');
    console.log('4. Quit');
}

function addStudent() {

    let student = {
        name: '',
        id: 0,
        scores: []
    };

    student.name = readlineSync.question('Student name: ');
    student.id = parseInt(readlineSync.question('Student ID: '));

    const numScores = parseInt(readlineSync.question('How many scores? '));

    for (let i = 1; i <= numScores; i++) {
        const score = parseFloat(readlineSync.question('Enter score ' + i + ': '));
        student.scores.push(score);
    }

    students.push(student);
    console.log('Student "' + student.name + '" added successfully.');
}

function displayAllStudents() {

    if (students.length === 0) {
        console.log('No students have been added yet.');
        return;
    }

    console.log('\n' +
        'Name'.padEnd(20) +
        'ID'.padEnd(12) +
        'Scores'.padEnd(30) +
        'Average'
    );
    console.log('-'.repeat(72));

    for (let i = 0; i < students.length; i++) {

        const s = students[i];

        let scoresStr = s.scores.join('  ');

        const avg = calculateAverage(s.scores).toFixed(2);

        console.log(
            s.name.padEnd(20) +
            String(s.id).padEnd(12) +
            scoresStr.padEnd(30) +
            avg
        );
    }
}

function calculateStudentAverage() {

    if (students.length === 0) {
        console.log('No students on record.');
        return;
    }

    const searchId = parseInt(readlineSync.question('Enter student ID: '));

    for (let i = 0; i < students.length; i++) {
        if (students[i].id === searchId) {
            const avg = calculateAverage(students[i].scores).toFixed(2);
            console.log(students[i].name + "'s average score: " + avg);
            return;
        }
    }

    console.log('Error: Student with ID ' + searchId + ' not found.');
}

while (true) {

    showMenu();
    const choice = readlineSync.question('Enter your choice (1-4): ');

    if (choice === '1') {
        addStudent();

    } else if (choice === '2') {
        displayAllStudents();

    } else if (choice === '3') {
        calculateStudentAverage();

    } else if (choice === '4') {
        console.log('Goodbye!');
        break;

    } else {
        console.log('Invalid choice. Please enter 1-4.');
    }
}