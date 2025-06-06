const express = require('express');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send(`
    <h1>Curso Express.js</h1>
    <p>Esto es una aplicación node.js con express.js</p>
    <p>Corre en el puerto: ${PORT}</p>
    `);
});

app.listen(PORT, () => {
  console.log('Server is running on port', PORT);
  console.log('Visit http://localhost:' + PORT);
});
