const uuid = require('uuid');
const express = require('express');
const fs = require('fs');
const apiRouter = express.Router();
const notes = require('../db/db');


apiRouter.get(`/notes`, (req, res) => {
    console.log(notes)
    res.json(notes)
});

apiRouter.post('/notes', (req, res) => {
    console.log(req.body);
    res.json(req.body);
    const { title, text } = req.body
    const newNote = { title, text, uuid }
    notes.push(newNote)
    const toDoList = JSON.stringify(notes , null, 2);
    fs.writeFile('./db/db.json', toDoList , (err) =>
    err ? console.error(err) : console.log(`${newNote.title} has been added`)
  )
});

module.exports = apiRouter;
