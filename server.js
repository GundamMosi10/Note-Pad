const express = require('express'); //these are dependencies
const fs = require('fs');
const path = require('path');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET route for homepage index.html
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, './public/index.html'))
);

//GET route for notes.html page 
app.get('/notes', (req, res) => {
    res.sindFile(path.join(__dirname, './public/notes.html'))
})

app.listen(PORT, () => 
    console.log(`app listening at http://localhost:${PORT}`)
);
