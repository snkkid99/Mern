const express = require("express");
const {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
} = require("../controllers/todoController");

const router = express.Router();

// GET all Todos
router.get("/", getTodos);

// GET a single Todo
router.get("/:id", getTodo);

// POST a new Todo
router.post("/", createTodo);

// DELETE a Todo
router.delete("/:id", deleteTodo);

// UPDATE a Todo
router.patch("/:id", updateTodo);

module.exports = router;
