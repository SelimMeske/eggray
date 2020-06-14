const express = require('express');
const app = express();
const parser = require('body-parser');
const bodyParser = require('body-parser');
const artistsRouter = require('./routers/artistsRouter');
const usersRouter = require('./routers/adminRouter');


app.use(bodyParser.json());

app.use('/api/artists', artistsRouter);
app.use('/api/users', usersRouter);

module.exports = app;