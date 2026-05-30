const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Todo = mongoose.model('todo');

router.get('/', async (req, res) => {
    const todos = await Todo.find();
    res.render('index', { todos });
});

router.post('/add', async (req, res) => {
    await Todo.create({
        todos: req.body.newitem
    });

    res.redirect('/');
});

router.post('/delete/:id', async (req, res) => {
    await Todo.findByIdAndDelete(req.params.id);
    res.redirect('/');
});

router.post('/delete', async (req, res) => {
    await Todo.deleteMany({});
    res.redirect('/');
});

module.exports = router;