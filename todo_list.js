const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const todoList = [];

function displayMenu() {
  console.log('\n===== Todo List =====');
  console.log('1. Add Task');
  console.log('2. List Tasks');
  console.log('3. Mark Task as Done');
  console.log('4. Delete Task');
  console.log('5. Exit');
}

function addTask() {
  rl.question('Enter the task: ', (task) => {
    todoList.push({ task, done: false });
    console.log('Task added successfully!');
    showMenu();
  });
}

function listTasks() {
  console.log('\n===== Tasks =====');
  todoList.forEach((task, index) => {
    console.log(`${index + 1}. [${task.done ? 'X' : ' '}] ${task.task}`);
  });
  showMenu();
}

function markTaskAsDone() {
  rl.question('Enter the task number to mark as done: ', (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < todoList.length) {
      todoList[index].done = true;
      console.log('Task marked as done!');
    } else {
      console.log('Invalid task number.');
    }
    showMenu();
  });
}

function deleteTask() {
  rl.question('Enter the task number to delete: ', (taskNumber) => {
    const index = parseInt(taskNumber) - 1;
    if (index >= 0 && index < todoList.length) {
      todoList.splice(index, 1);
      console.log('Task deleted!');
    } else {
      console.log('Invalid task number.');
    }
    showMenu();
  });
}

function showMenu() {
  displayMenu();
  rl.question('Select an option: ', (option) => {
    switch (option) {
      case '1':
        addTask();
        break;
      case '2':
        listTasks();
        break;
      case '3':
        markTaskAsDone();
        break;
      case '4':
        deleteTask();
        break;
      case '5':
        console.log('Goodbye!');
        rl.close();
        break;
      default:
        console.log('Invalid option. Please try again.');
        showMenu();
    }
  });
}

showMenu();