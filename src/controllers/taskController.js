let tasks = [];
let id = 1;

exports.createTask = (req, res) => {
  const { title } = req.body;
  const task = { id: id++, title };
  tasks.push(task);
  res.status(201).json(task);
};

exports.getTasks = (req, res) => {
  res.json(tasks);
};

exports.updateTask = (req, res) => {
  const task = tasks.find(t => t.id == req.params.id);
  if (!task) return res.status(404).json({ error: 'Not found' });

  task.title = req.body.title;
  res.json(task);
};

exports.deleteTask = (req, res) => {
  const index = tasks.findIndex(t => t.id == req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Not found' });

  tasks.splice(index, 1);
  res.json({ message: 'Deleted' });
};