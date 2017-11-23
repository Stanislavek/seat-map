'use strict';

const express  = require('express');
const resource = require('express-resource');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.resource('pages', require('./app/pages'));

app.listen(PORT, HOST);
//console.log(`Running on http://${HOST}:${PORT}`);