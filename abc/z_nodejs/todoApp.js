import fs from 'fs';
import readline from 'readline';

const FILE = 'task.json';

if (!fs.existsSync(FILE)) {
  fs.writeFileSync(FILE, JSON.stringify([]));
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const loadTasks = () => {
  const data = fs.readFileSync(FILE, 'utf-8');
  return JSON.parse(data);
};

const saveTasks = (tasks) => {
  fs.writeFileSync(FILE, JSON.stringify(tasks, null, 2));
};

const showMenu = () => {
  console.log('\nTodo List Application');
  console.log('1. Add Tasks');
  console.log('2. View Task');
  console.log('3. Remove Task');
  console.log('4. Exit');
  console.log('Enter your choice:');
  //   rl.prompt();
  rl.question('Enter your choice: ', handleMenu);
};

const handleMenu = (choice) => {
  switch (choice) {
    case '1': {
      rl.question('Enter Task:', (task) => {
        const tasks = loadTasks();
        tasks.push({ task, done: false });
        saveTasks(tasks);
        console.log('Task added successfully!');
        showMenu();
      });
      break;
    }

    case '2': {
      const tasks = loadTasks();
      if (tasks.length === 0) {
        console.log('No tasks found.');
      } else {
        console.log('Tasks:');
        tasks.forEach((task, index) => {
          console.log(
            `${index + 1}. ${task.task} - ${task.done ? 'Done' : 'Not Done'}`
          );
        });
      }
      showMenu();
      break;
    }

    case '3': {
      rl.question('Enter Task Number to Remove:', (taskNumber) => {
        const tasks = loadTasks();
        const index = parseInt(taskNumber) - 1;
        if (isNaN(index) || index < 0 || index >= tasks.length) {
          console.log('Invalid task number.');
        } else {
          tasks.splice(index, 1);
          saveTasks(tasks);
          console.log('Task removed successfully!');
        }
        showMenu();
      });
      break;
    }

    default: {
      console.log('Invalid choice. Please try again.');
      showMenu();
      break;
    }
  }
};
