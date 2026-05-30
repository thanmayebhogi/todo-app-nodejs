const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    todos: {
        type: String,
        required: true
    }
});

mongoose.model('todo', todoSchema);