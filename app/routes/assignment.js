//Imports
const router = require('express').Router();
const _ = require('lodash');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Custom Imports
const { Assignment } = require('../models/Assignment');

// /api/v1/users/assigment/
router.post('/upload/', async (req, res, next) => {
    const data = _.pick(req.body, ['file', 'startTime', 'endTime', 'submittedBy', 'isLive']);
    if (data.file && data.startTime && data.endTime && data.submittedBy && data.isLive) {
        const assignmentExist = await Assignment.findOne({ file: data.file });
        if (!assignmentExist) {
            const newAssignment = new Assignment({ file: data.file, startTime: data.startTime, endTime: data.endTime, submittedBy: [], isLive: data.isLive });
            await newAssignment.save(newAssignment);
            return res.status(200);
        }
        else {
            next({
                status: 400,
                msg: 'Assignment already exists!'
            })
        }
    }
    else {
        next({
            status: 400,
            msg: 'Invalid data!'
        })
    }
})

router.post('/uploadStudent/', async (req, res, next) => {
    const data = _.pick(req.body, ['file', 'startTime', 'endTime', 'submittedBy', 'isLive']);
    if (data.file && data.startTime && data.endTime && data.submittedBy && data.isLive) {
        const assignmentExist = await Assignment.findOne({ file: data.file });
        if (!assignmentExist) {
            const newAssignment = new Assignment({ file: data.file, startTime: data.startTime, endTime: data.endTime, submittedBy: [], isLive: data.isLive });
            await newAssignment.save(newAssignment);
            return res.status(200);
        }
        else {
            next({
                status: 400,
                msg: 'Assignment already exists!'
            })
        }
    }
    else {
        next({
            status: 400,
            msg: 'Invalid data!'
        })
    }
})

module.exports = router;