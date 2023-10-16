const readline = require('readline-sync');

const tasks = [];

function addTask() {
  const indicator = readline.question('Indicador: ');
  const description = readline.question('Descripción: ');
  tasks.push({ indicator, description, completed: false });
  console.log('Tarea añadida.');
}

function deleteTask() {
  const index = readline.question('Índice de la tarea a eliminar: ');
  if (index >= 0 && index < tasks.length) {
    tasks.splice(index, 1);
    console.log('Tarea eliminada.');
  } else {
    console.log('Índice no válido.');
  }
}

function completeTask() {
  const index = readline.question('Índice de la tarea completada: ');
  if (index >= 0 && index < tasks.length) {
    tasks[index].completed = true;
    console.log('Tarea marcada como completada.');
  } else {
    console.log('Índice no válido.');
  }
}

function showTasks() {
  console.log('Lista de tareas:');
  tasks.forEach((task, index) => {
    console.log(`${index}. [${task.completed ? 'X' : ' '}] ${task.indicator}: ${task.description}`);
  });
}

function main() {
  while (true) {
    console.log('\nOpciones:');
    console.log('1. Añadir tarea');
    console.log('2. Eliminar tarea');
    console.log('3. Completar tarea');
    console.log('4. Mostrar tareas');
    console.log('5. Salir');

    const choice = readline.question('Elige una opción: ');

    switch (choice) {
      case '1':
        addTask();
        break;
      case '2':
        deleteTask();
        break;
      case '3':
        completeTask();
        break;
      case '4':
        showTasks();
        break;
      case '5':
        return;
      default:
        console.log('Opción no válida.');
    }
  }
}

main();
