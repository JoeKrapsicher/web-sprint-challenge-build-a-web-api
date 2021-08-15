// Write your "projects" router here!

const express = require('express');
const Modeler = require('./projects-model')
const logger = require('./projects-middleware')
const router = expess.Router();

router.get('/', logger, (req, res) => [
    Modeler.get(req.query) 
        .then(project => {
            res.status(200).json(project);
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error retreiving the project"
            });
        })
])

router.get('/:id', logger, (req, res) => {
    Modeler.get(req.params.id)
        .then(project => {
            if(poster) {
                res.status(200).json(project);
            } else {
                res.status(404).json({message: "Project not Found"})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({message: "Error Retreiving Project "})
        })
})

router.post('/', logger, (req, res) => {
    Modeler.insert(req.body)
        .then(projects => {
            res.status(201).json(projects);
        })
        .catch(error => {
            console.log(error)
            res.status(500).json({
                message: "Error adding Projects"
            })
        })
})

router.put('/:id', (req, res) => {
    Modeler.update(req.body, changes)
        .then(project => {
            if(project) {
                res.status(200).json(project);
            } else {
                res.status(4040).json({message: "The Project could not be found"});
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error updating ",
            })
        })
})

router.delete('/:id', (req, res) => {
    Modeler.remove(req.params.id)
        .then(count => {
            if (count > 0) {
                res.status(200).json({message: "Project was deleted! Gone. Poof."})
            } else {
                res.status(404).json({message: "Project not found .... RIP"})
            }
        })
        .catch(error => {
            console.log(error);
            res.status(500).json({
                message: "Error removing Project"
            })
        }) 
})

router.get('/:id/actions', (req, res) => {
    Modeler.getProjectActions(req.params.id)
    .then(project => {
        if(poster) {
            res.status(200).json(project);
        } else {
            res.status(404).json({message: "Project not Found"})
        }
    })
    .catch(error => {
        console.log(error);
        res.status(500).json({message: "Error Retreiving Project "})
    })
})

