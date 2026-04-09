const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json()); // Handle JSON data [cite: 20]

// In-memory "database" 
let tasks = [
  { id: 1, title: "Sample Task", completed: false, createdAt: new Date() }
];

// GET /tasks - Return all tasks [cite: 23]
app.get('/tasks', (req, res) => {
  res.json(tasks);
});

// POST /tasks - Create a task [cite: 23]
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Title is required" }); // Validation [cite: 19]

  const newTask = {
    id: Date.now(),
    title,
    completed: false,
    createdAt: new Date()
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// PATCH /tasks/:id - Update status [cite: 23]
app.patch('/tasks/:id', (req, res) => {
  const { id } = req.params;
  const task = tasks.find(t => t.id == id);
  if (!task) return res.status(404).json({ error: "Task not found" });

  task.completed = !task.completed;
  res.json(task);
});

// DELETE /tasks/:id - Delete task [cite: 23]
app.delete('/tasks/:id', (req, res) => {
  tasks = tasks.filter(t => t.id != req.params.id);
  res.status(204).send();
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));