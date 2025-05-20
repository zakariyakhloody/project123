const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`
    <h1>My school project: Project 123</h1>
    <p>This is a random TypeScript code generated for my coursework.</p>
  `);
});

app.listen(3000, () => console.log('Server is running on port 3000'));
