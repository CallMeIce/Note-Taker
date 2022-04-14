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
















//* Get route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

//* Get route for notes
app.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
  });

//* Make the page appear in a local port
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);

//TODO Make the save button appear

//TODO Make the notes append to the page

//TODO connect to Hiroku 



// const express = require('express');
// const path = require('path');
// const api = require('./routes/index.js');

// const PORT = 3001;

// const app = express();

// // Middleware for parsing JSON and urlencoded form data
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));
// app.use('/api', api);

// app.use(express.static('public'));

// // GET Route for homepage
// app.get('/', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/index.html'))
// );

// // GET Route for feedback page
// app.get('/feedback', (req, res) =>
//   res.sendFile(path.join(__dirname, '/public/pages/feedback.html'))
// );

// app.listen(PORT, () =>
//   console.log(`App listening at http://localhost:${PORT} 🚀`)
// );
