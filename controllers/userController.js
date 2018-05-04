const express = require('express');
const router = express.Router();
const sequelize = require('../db')
const User = sequelize.import('../models/user');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/', (req, res) => {
    let firstName = req.body.user.firstName;
    let lastName = req.body.user.lastName;
    let email = req.body.user.email;
    let username = req.body.user.username;
    let password = req.body.user.password;
    let companyID = req.body.user.companyID;
    let title = req.body.user.title;
    let userType = req.body.user.userType;
    let regStatus = req.body.user.regStatus;

    User.create({
        firstName: firstName,
        lastName: lastName,
        email: email,
        username: username,
        password: bcrypt.hashSync(password, 10),
        companyID: companyID,
        title: title,
        userType: userType,
        regStatus: regStatus
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

router.post('/signin', (req, res) => {
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