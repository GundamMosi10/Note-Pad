const express = require('express'); //these are dependencies
const fs = require('fs');
const path = require('path');
const {readFromFile, writeToFile, readAndAppend} = require('./fsUtils');

//server set up
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

// GET route for homepage index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

//GET route for notes.html page 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})


app.get('/api/notes', (req, res) => {
    readFromFile('./db/db.json').then(function(data){
        const notes = JSON.parse(data);
            console.log(notes);
            res.json(notes)
    })
})









app.listen(PORT, () => 
    console.log(`app listening at http://localhost:${PORT}`)
);


