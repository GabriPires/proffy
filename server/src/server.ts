import express from 'express';

const app = express();

app.get('/users', (request, response) => {
  const users = [
    { name: 'Gabriel', age: 20 },
    { name: 'Zeck', age: 18 }
  ]
  return response.json(users)
});

app.listen(3333);