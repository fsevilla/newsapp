const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8000;

app.use(express.static(path.join(__dirname, 'dist', 'newsapp')));

app.get('**', (req, res) => {
  // res.sendFile('dist/newsapp/index.html');
  res.sendFile(path.join(__dirname, 'dist', 'newsapp', 'index.html'));
});

app.listen(port, () => {
  console.log('app is running...');
});