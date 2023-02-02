const express = require('express');
const app = express();

app.get('/', (req, res, next) => res.json({ message: 'Hello World' }));

app.get('/product', (req, res, next) => res.json({ message: 'Product routes' }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Listening on PORT ' + PORT);
});