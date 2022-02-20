const express = require('express'); //these are dependencies
const fs = require('fs');
const path = require('path');
const {readFromFile, writeToFile, readAndAppend} = require('./fsUtils');
const uuid = require('uuid');


//server set up
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //allows us to use the css and js in the public folder for the front end

//
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/db/db.json')); //this should save the notes and joins it to the json database db.json
})



// // This is to read from the db.json file
// app.get('/api/notes', (req, res) => {
//     readFromFile('./db/db.json').then(function(data){
//         const notes = JSON.parse(data);
//             console.log(notes);
//             res.json(notes)
//     })
// })

// //This allows us to create a new note and posts it to the db.json file
// app.post('/api/notes', (req, res) => {
//     const note = {
//         title:req.body.title,
//         text:req.body.text
//     }
//     readAndAppend(note,'./db/db.json')
// })


// GET route for homepage index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

//GET route for notes.html page 
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'))
})


app.listen(PORT, () => 
    console.log(`app listening at http://localhost:${PORT}`)
);


