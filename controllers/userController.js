const express = require('express');
const router = express.Router();
const sequelize = require('../db')
const User = sequelize.import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/register', (req, res) => {
    let password = bcrypt.hashSync(req.body.user.password, 10);

    User.create({
        firstName: req.body.user.firstName,
        lastName: req.body.user.lastName,
        email: req.body.user.email,
        username: req.body.user.username,
        password: password,
        company: req.body.user.company,
        title: req.body.user.title,
        userType: req.body.user.userType,
        regStatus: false
    }).then(
        createSuccess = (user) => {
            const token = jwt.sign({ id: user.dataValues.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

            res.json({
                user: user,
                message: 'created',
                sessionToken: token
            });
        },
        createError = (err) => {
            res.send(500, err.message);
        }
    );
});

router.post('/login', (req, res) => {
    User.findOne({
        where: {
            username: req.body.user.username
        }
    }).then((user) => {
        if (user) {
            bcrypt.compare(req.body.user.password, user.password, (err, matches) => {
                if (matches) {

                    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: 60 * 60 * 24 });

                    res.json({
                        user: user,
                        message: "successfully authenticated",
                        sessionToken: token
                    });
                } else {
                    res.status(500).send({ error: "password does not match." })
                }
            });
        } else {
            res.status(500).send({ error: "your email is not in database." });
        } (err) => {
            res.status(500).send({ error: "there was an error with the server." })

        }
    });
});

router.get('/', (req, res) => {

    User.findAll()
        .then(
            findAllSuccess = (data) => {
                res.json(data);
            },
            findAllError = (err) => {
                res.send(500, err.message);
            }
        );
})

module.exports = router;