const router = require('express').Router();

const Todo = require('../models/Todo');

//Create todo
router.post('/', async (req, res) => {
	const newTodo = new Todo(req.body);

	try {
		const todo = await newTodo.save();

		res.status(200).json(todo);
	} catch (err) {
		res.status(500).json(err);
	}

});

//Get All todos

router.get('/', async (_, res) => {
	try {
		const todos = await Todo.find();

		res.status(200).json(todos);
	} catch (err) {
		res.status(500).json(err);
	}
});

module.exports = router;
