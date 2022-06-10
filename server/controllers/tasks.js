const Task = require("../models/Task");

//controller to create task
module.exports.createTask = async (req, res) => {
  const newTask = new Task(req.body);
  try {
    const savedTask = await newTask.save();
    res.status(200).json(savedTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

//must change this to the commented out below once I figure out why the req body is empty
module.exports.editTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  let status = task.done;
  let updatedStatus = !status;
  try {
    const updatedTask = await Task.findByIdAndUpdate(
      req.params.id,
      {
        $set: { done: updatedStatus },
      },
      { new: true }
    );
    res.status(200).json(updatedTask);
  } catch (err) {
    res.status(500).json(err);
  }
};

//must change this to the commented out below once I figure out why the req body is empty
module.exports.deleteTask = async (req, res) => {
  const task = await Task.findById(req.params.id);
  try {
    await task.delete();
    res.status(200).json(`Task successfully deleted`);
  } catch (err) {
    res.status(500).json(err);
  }
};

//must change this to the commented out below once I figure out why the req body is empty
module.exports.getAllTasks = async (req, res) => {
  try {
    let tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};

/*controller to edit/update task (i.e. DO/UNDO)
module.exports.editTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    let status = task.done;
    let updatedStatus = !status;
    if (task.username === req.body.username) {
      try {
        const updatedTask = await Task.findByIdAndUpdate(
          req.params.id,
          {
            $set: { done: updatedStatus },
          },
          { new: true }
        );
        res.status(200).json(updatedTask);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json(`Usernames don't match`);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};*/

/*constroller to delete task
module.exports.deleteTask = async (req, res) => {
  try {
    const task = await Task.findById(req.params.id);
    console.log(req.body)
    if (task.username === req.body.username) {
      try {
        await task.delete();
        res.status(200).json(`Task successfully deleted`);
      } catch (err) {
        res.status(500).json(err);
      }
    } else {
      res.status(401).json(`Request forbidden. Usernames don't match`);
    }
  } catch (err) {
    res.status(500).json(err);
  }
};*/

/*
//controller to get all tasks (of a user)
module.exports.getAllTasks = async (req, res) => {
  const username = req.body.username;
  try {
    let tasks = await Task.find({ username });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json(err);
  }
};
*/
