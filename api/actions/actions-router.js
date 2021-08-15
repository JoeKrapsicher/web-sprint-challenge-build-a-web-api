// Write your "actions" router here!
const express = require('express');
const Modeler = require('./actions-model')
const logger = require('./actions-middleware')
const router = express.Router();

router.get('/', logger, (req, res) => {
    Modeler.get(req.query)
        .then(actions => {
            res.status(200).json(actions);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error retrieving the action"
            })
        })
})

router.get('/:id', logger, (req, res) => {
    Modeler.get(req.params.id)
        .then(actions => {
            if(actions) {
                res.status(200).json(actions);
            } else {
                res.status(404).json({message: "Action not found"})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: "Error Retreving Action"})
        })
})

router.post('/', logger, (req,res) => {
    Modeler.insert(req.body)
        .then(action => {
            res.status(201).json(action);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Error adding Action"
            })
        })
})

router.put('/:id', (req, res) => {
    Modeler.update(req.body, changes)
        .then(action => {
            if(action) {
                res.status(200).json(action);
            } else {
                res.status(404).json({
                    message: "Error finding action"
                })
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: "Error editing action"})
        })
})

router.delete('/:id', (req,res) => {
    Modeler.delete(req.params.id)
        .then(action => {
            if (count > 0) {
                res.status(200).json({message: "Action Deleted! Gone. Poof."})
            } else {
                res.status(404).json({message: "Could not find Action ... help!"})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error deleting Action"
            })
        })
})