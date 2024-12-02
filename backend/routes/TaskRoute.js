const express = require('express');
const TaskController = require('../controllers/TaskController')

const router = express.Router();

router.get('/', TaskController.getAllTasks)
router.post('/', TaskController.addTask)
router.put('/:taskId', TaskController.updateTask)
router.delete('/:taskId', TaskController.deleteTask)

module.exports = router;
