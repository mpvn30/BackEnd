const express = require("express");
const Sleep = require("../models/sleep-model.js")
const restricted = require('./auth/authenticate-middleware.js');
const server = express();


server.get("/" ,(req, res) => {
    Sleep.find()
    .then(sleep => {
        res.status(200).json(sleep)
        console.log(sleep)
    })
    .catch(error => {
        res.status(500).json({error: "cannot GET sleep"})
    })
})

server.get("/:id", (req, res) => {
    const { id } = req.params;

    Sleep.findById(id)
    .then(char => {
      if (char) {
        res.json(char);
      } else {
        res.status(404).json({ message: 'Could not find sleep' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed' });
    });
})

server.post("/", (req, res) => {
    const sleep = req.body;
    Sleep.add(sleep)
    .then(char => {
        res.status(200).json(char)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({error: `error`})
    })
})

server.delete('/:id', (req, res) => {
    const { id } = req.params;

    Sleep.remove(id)
    .then(deleted => {
      if (deleted) {
        res.json({ removed: deleted });
      } else {
        res.status(404).json({ message: 'Could not find sleep with given id' });
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to delete' });
    });
});


module.exports = server;