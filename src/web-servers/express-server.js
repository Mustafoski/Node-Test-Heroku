import express from 'express';
const app = express();

app.use(express.json());

app.get('/hello', (req, res) => {
  colorfulLog('Received a get request from express on path /hello');
  res.send('Hello from Express!');
});

const users = [
  {
    id: '123',
    name: 'Emir',
  },
  {
    id: '234',
    name: 'Jasmin',
  },
];

// GET /users/123
app.get('/users', (req, res) => {
  // load users data from database
  res.send(users);
});

app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  const user = users.find((u) => u.id === userId);
  res.send(user);
});

app.post('/users', (req, res) => {
  colorfulLog(req.body);
  const newUser = req.body;
  users.push(newUser);
  res.send(users);
});

app.listen(3000, () => {
  colorfulLog(`Magic happens on port 3000`);
});
