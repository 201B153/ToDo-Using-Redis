import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import path from 'path';
import { Client, Repository } from 'redis-om';
import { taskSchema } from './schema/task.schema.js';

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: ['http://localhost:3000'],
  })
);

const client = new Client();
await client.open(process.env.REDIS_URL, console.log('db connected'));

const taskRepository = new Repository(taskSchema, client);

await taskRepository.dropIndex();
await taskRepository.createIndex();

app.get('/', async (req, res) => {
  res.send('Hello Homepage');
});

app.get('/tasks', async (req, res) => {
  res.send(await taskRepository.search().returnAll());
});

app.post('/tasks', async (req, res) => {
  const task = taskRepository.createEntity();

  task.name = req.body.name;
  task.complete = false;
  task.id = await taskRepository.save(task);

  res.send(task);
});

app.put('/tasks/:id', async (req, res) => {
  const task = await taskRepository.fetch(req.params.id);

  task.complete = req.body.complete;
  await taskRepository.save(task);

  res.send(task);
});

app.delete('/tasks/:id', async (req, res) => {
  await taskRepository.remove(req.params.id);

  res.send(null);
});

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, '/todo-frontend/build')));
app.get('*', (req, res) =>
  res.sendFile(path.join(__dirname, '/todo-frontend/build/index.html'))
);

app.use((err, req, res, next) => {
  res.status(500).send({ message: err.message });
});

app.listen(process.env.PORT || 8000, () => {
  console.log("Backend server is running!");
});