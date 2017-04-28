const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./app/routes');
const config = require('./app/config');

const app = express();

app.use(bodyParser());
app.use(routes);

app.listen(config.port, () => console.log(`Running on localhost:${config.port}`));
