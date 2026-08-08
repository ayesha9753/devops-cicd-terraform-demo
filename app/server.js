const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// In-memory task store (simple demo data layer)
let tasks = [
  { id: 1, title: 'Set up CI/CD pipeline', done: true },
  { id: 2, title: 'Provision AWS infra with Terraform', done: false }
];

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok', uptime: process.uptime() });
});

app.get('/tasks', (req, res) => {
  res.json(tasks);
});

app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: 'title is required' });
  const newTask = { id: tasks.length + 1, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
