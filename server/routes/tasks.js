const router = require("express").Router();
const {
  createTask,
  editTask,
  deleteTask,
  getAllTasks,
} = require("../controllers/tasks");

//CREATE
router.post("/", createTask);

//UPDATE (DO/UNDO TASK)
router.put("/:id", editTask);

//DELETE
router.delete("/:id", deleteTask);

//GET ALL
router.get("/", getAllTasks);

module.exports = router;
