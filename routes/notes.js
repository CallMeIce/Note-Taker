const notes = require('express').Router();
const path = require('path');

router.get("/notes", (req, res) => {
    res.sendFile(path.join("./public/notes.html"))
});

router.get("*", (req, res) => {
    res.sendFile(path.join("index.html"))
});

module.exports = notes;