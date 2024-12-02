const express = require('express');
const TaskController = require('../controllers/TaskController')

const router = express.Router();

router.get('/', TaskController.getAllTasks)
router.post('/', TaskController.addTask)
router.put('/:id', TaskController.updateTask)
router.delete('/:id', TaskController.deleteTask)

module.exports = router;
