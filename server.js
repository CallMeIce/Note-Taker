const express = require('express');
const path = require('path');
const fs = require('fs');
const api = require('./routes/api')
const routerNotes = require('./routes/notes')


//* Helper method for generating unique ids
const PORT = 3001;
const app = express();

//* Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use('/api', api);
app.use('/', routerNotes);


//* Make the page appear in a local port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);


//TODO connect to Hiroku 
