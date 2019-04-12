'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 3000;
const HOST = '0.0.0.0';
const VERSION = require('./package.json').version
// App
const app = express();
app.get('/', (req, res) => {
    res.send(`Hello world {${VERSION}}`);
});
app.get('/healthcheck', (req, res) => {
    res.send('ok');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);