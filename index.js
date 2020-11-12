const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/api')

const app = express();

mongoose.connect('mongodb://localhost/Company', {useNewUrlParser: true , useUnifiedTopology: true})
mongoose.Promise = global.Promise;

mongoose.connection.on('error', (err) =>{
    console.log(err.message);
    process.exit(1);
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('api', routes)


app.listen(process.env.PORT || 3000);