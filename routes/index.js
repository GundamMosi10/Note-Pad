const express = require('express'); //dependencies

const notesRouter = require('./notes'); //import the modular router for /notes 

const app = express();


app.use('/notes', notesRouter);

module.exports = app; 