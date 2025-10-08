const {randomUUID} = require("node:crypto");

let tasks = [
    {id:randomUUID(), title:"Aprender API Rest", completed:false },
   {id:randomUUID(), title:"Aprender API Rest", completed:false },

];

function findAll(){
    return tasks;
}

function addTask(title){
    const task= {
        id: randomUUID(),
        title: title,
        completed: false
    }

    tasks.push(task);
    return task;
}

function removeTask(id){
    const index = tasks.findIndex(item=> item.id===id);

    if (index===-1){
        return false;
    }

    tasks.splice(index,1);
    return true;
}

//Consultar tarea por id
function reviewTask(id) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return false;
  }

  return task;
}

// ✏️ Actualizar el título de una tarea
function updateTitle(id, newTitle) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return false;
  }

  task.title = newTitle;
  return task;
}

//Completar o descompletar una tarea
function updateCompleted(id, state) {
  const task = tasks.find((item) => item.id === id);

  if (!task) {
    return false;
  }

  task.completed = state;
  return task;
}

module.exports = {
  findAll,
  addTask,
  removeTask,
  reviewTask,
  updateTitle,
  updateCompleted,
};

//pero subelo