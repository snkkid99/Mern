const Todo = require("../models/todoModel");
const mongoose = require("mongoose");

// get all todos
const getTodos = async (req, res) => {
  const todo = await Todo.find({}).sort({ createdAt: -1 });
  res.status(200).json(todo);
};

// get a single todo
const getTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({ error: "No such todo" });
  }

  const todo = await Todo.findById(id);

  if (!todo) {
    return res.status(404).json({ error: "No such todo" });
  }

  res.status(200).json(todo);
};

// create a new todo
const createTodo = async (req, res) => {
  const { title, priorite, description } = req.body;

  let emptyFields = [];

  if (!title) {
    emptyFields.push("title");
  }
  if (!priorite) {
    emptyFields.push("load");
  }
  if (!description) {
    emptyFields.push("reps");
  }
  if (emptyFields.length > 0) {
    return res
      .status(400)
      .json({ error: "Please fill in all fields", emptyFields });
  }

  try {
    const todo = await Todo.create({ title, priorite, description });
    res.status(200).json(todo);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// delete a todo
const deleteTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such todo" });
  }

  const todo = await Todo.findOneAndDelete({ _id: id });

  if (!todo) {
    return res.status(400).json({ error: "No such todo" });
  }

  res.status(200).json(todo);
};

// update a todo
const updateTodo = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ error: "No such todo" });
  }

  const todo = await Todo.findOneAndUpdate(
    { _id: id },
    {
      ...req.body,
    }
  );

  if (!todo) {
    return res.status(400).json({ error: "No such todo" });
  }

  res.status(200).json(todo);
};

module.exports = {
  getTodos,
  getTodo,
  createTodo,
  deleteTodo,
  updateTodo,
};
