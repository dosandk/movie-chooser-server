const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./routes');
const config = require('./config');

const app = express();

app.use(bodyParser());
app.use(routes);

app.listen(config.port, () => console.log(`Running on localhost:${config.port}`));
