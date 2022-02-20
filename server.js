const express = require('express'); //these are dependencies
const fs = require('fs');
const path = require('path');
const {v4 : uuidv4} = require('uuid'); //this allows us to make a unique id for each note that is created so we can specify which note if we want to delete or call up
const notes = require('./db/db.json');


//server set up
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public')); //allows us to use the css and js in the public folder for the front end


app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, './db/db.json')); //this should get the notes that are in the json db
})

app.post('/api/notes', (req, res) => { //allows us to create new notes 
    const notes = JSON.parse(fs.readFileSync('./db/db.json')); //parsing this json file turns the information into an object for us to read the file
    const newNotes = req.body; 
    newNotes.id = uuidv4(); //gives each new note a unique id so that we can specifically target it when we want
    notes.push(newNotes); 
    fs.writeFileSync('./db/db.json', JSON.stringify(notes)) //takes the json object and turns it into a string so we can read it
    res.json(notes);
});


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


