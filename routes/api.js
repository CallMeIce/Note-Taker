const db = require('../db/db.json')
const router = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const fs = require('fs')



router.get("/notes", (req, res) => {
    res.send(db)
})


router.post('/notes', (req, res) => {
    let newID = uuidv4()
    let fullNote = {
        id: newID,
        title: req.body.title,
        text: req.body.text
    };

    fs.readFile('../Note-Taker/db/db.json', 'utf8', (err, data) => {
        if (err) {
            throw (err)
        }
        const savedNotes = JSON.parse(data)

        savedNotes.push(fullNote)
    
    fs.writeFile('../Note-Taker/db/db.json', JSON.stringify(savedNotes), 
        (err) => {
            if (err) {
                throw (err)
            }
            res.send(savedNotes)
        
            console.log(savedNotes);
        }
    )

    })
})

module.exports = router