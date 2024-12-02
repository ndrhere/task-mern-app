const mongoose = require('mongoose');
const {Schema} = require('mongoose');

const TaskSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String, 
        required: true
    },
    deadline: {
        type: String,
        required: true
    },
    priority: {
        type: String
    }
})

const Task = mongoose.model('task', TaskSchema)
module.exports = Task