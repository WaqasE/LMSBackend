//Imports
const router = require('express').Router();
const _ = require('lodash');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



// Custom Imports
const { Student } = require('../models/User');
const { Teacher } = require('../models/Teacher');

// /api/v1/users/auth/
router.post('/student/', async (req, res, next) => {
    const data = _.pick(req.body, ['email', 'password']);
    if (data.email && data.password) {
        const studentExist = await Student.findOne({ email: data.email });
        if (studentExist) {
            const validPassword = await bycrypt.compare(data.password, studentExist.password);
            if (!validPassword) return res.status(400).send('Invalid email or password!');
            const token = jwt.sign(_.pick(studentExist, ['_id', 'name']), process.env.JWTPRIVATEKEY);
            return res.status(200).send(token);
        }
        else {
            next({
                status: 400,
                msg: 'Invalid email or password!'
            })
        }
    }
    else {
        next({
            status: 400,
            msg: 'Invalid input!'
        })
    }
})

router.post('/teacher/', async (req, res, next) => {
    const data = _.pick(req.body, ['email', 'password']);
    if (data.email && data.password) {
        const teacherExist = await Teacher.findOne({ email: data.email });
        if (teacherExist) {
            const validPassword = await bycrypt.compare(data.password, studentExist.password);
            if (!validPassword) return res.status(400).send('Invalid email or password!');
            const token = jwt.sign(_.pick(teacherExist, ['_id', 'name']), process.env.JWTPRIVATEKEY);
            return res.status(200).send(token);
        }
        else {
            next({
                status: 400,
                msg: 'Invalid email or password!'
            })
        }
    }
    else {
        next({
            status: 400,
            msg: 'Invalid input!'
        })
    }
})

module.exports = router;