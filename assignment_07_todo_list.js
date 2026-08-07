const readlineSync = require('readline-sync');

let tasks = [];

function showMenu() {
    console.log('\n============================');
    console.log('      TO-DO LIST MENU       ');
    console.log('============================');
    console.log('1. Add task');
    console.log('2. View tasks');
    console.log('3. Delete task');
    console.log('4. Quit');
}

function addTask() {
    const task = readlineSync.question('Enter task: ');
    tasks.push(task);
    console.log('Task added: "' + task + '"');
}

function viewTasks() {
    if (tasks.length === 0) {
        console.log('Your to-do list is empty!');
        return;
    }

    console.log('\nYour Tasks:');
    for (let i = 0; i < tasks.length; i++) {
        console.log((i + 1) + '. ' + tasks[i]);
    }
}

function deleteTask() {
    if (tasks.length === 0) {
        console.log('No tasks to delete!');
        return;
    }

    viewTasks();

    const num = parseInt(readlineSync.question('\nEnter task number to delete: '));

    if (num < 1 || num > tasks.length) {
        console.log('Error: Invalid task number.');
        return;
    }

    const deleted = tasks[num - 1];

    tasks.splice(num - 1, 1);

    console.log('Task "' + deleted + '" has been removed.');
}

while (true) {

    showMenu();
    const choice = readlineSync.question('Enter your choice (1-4): ');

    if (choice === '1') {
        addTask();

    } else if (choice === '2') {
        viewTasks();

    } else if (choice === '3') {
        deleteTask();

    } else if (choice === '4') {
        console.log('Goodbye!');
        break;

    } else {
        console.log('Invalid choice. Please enter 1-4.');
    }
}