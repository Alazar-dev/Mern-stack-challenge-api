const express = require('express');
const router = express.Router();
const userModel = require('../models/user_model');


router.get('/employee', () => {
    res.send({type: object});
})