const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/list');

app.set('view engine', 'ejs');

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./model/Todo');
app.use(require('./routes/todo'));

app.listen(1000, () => {
    console.log('Server running on port 1000');
});