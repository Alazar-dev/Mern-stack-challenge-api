const express = require('express');
const router = express.Router();
const userModel = require('../models/user_model');


router.get('/employee', function(req, res) {
    res.send(employee);
});

router.post('/employee', function(req, res){
    res.send('Successfully registered!');
})



module.exports = router