const Task = require('../models/task.model');

exports.findAll =(req, res) => {
    const data = Task.findAll();
    res.status(200).json(data);
}

exports.addTask = (req,res) => {
    const title = req.body.title;
    const createdTask = Task.create(title);
    res.status(201).json(createdTask);
}

exports.removeTask = (req,res) => {
    const id = req.params.id;
    const ok = Task.removeTask(id);

    if(!ok){
        return res.status(404).json({message: 'Tarea no encontrada'});
    }

     res.status(204).json({message: 'Tarea eliminada'})
}

// Consultar tarea por id
exports.reviewTask = (req, res) => {
  const id = req.params.id;
  const task = Task.reviewTask(id);

  if (!task) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  res.status(200).json(task);
};

// Actualizar título de una tarea
exports.updateTitle = (req, res) => {
  const id = req.params.id;
  const newTitle = req.body.newTitle;

  const updatedTask = Task.updateTitle(id, newTitle);

  if (!updatedTask) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  res.status(200).json(updatedTask);
};

// Actualizar estado completed de una tarea
exports.updateCompleted = (req, res) => {
  const id = req.params.id;
  const state = req.body.completed; // true o false

  const updatedTask = Task.updateCompleted(id, state);

  if (!updatedTask) {
    return res.status(404).json({ message: 'Tarea no encontrada' });
  }

  res.status(200).json(updatedTask);
};

//pero subelo