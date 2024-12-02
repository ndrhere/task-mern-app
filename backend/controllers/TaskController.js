const Task = require("../models/TaskSchema");

exports.getAllTasks = async (req, res) => {
  try {
    const allTasks = await Task.find();
    return res.status(200).json(allTasks);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};

exports.addTask = async (req, res) => {
  try {
    const { title, description, deadline, priority } = req.body;
    const newTask = await Task.create({
      title: title,
      description: description,
      deadline: deadline,
      priority: priority,
    });

    return res.json({ newTask });
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
};

exports.updateTask = async (req, res) => {
  try {
    const { title, description, deadline, priority } = req.body;
    const taskId = req.params.id;
    const updatedTask = await Task.findByIdAndUpdate(
       taskId,
      { $set: { title, description, deadline, priority } },
      {new:true}
    );
    return res.status(200).json({updatedTask});
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};


exports.deleteTask = async (req, res) => {
try{
const taskId = req.params.id;
const deletedTask = await Task.findByIdAndDelete(taskId);
return res.status(200).send(deletedTask)
}catch(error){
    console.log(error);
    return res.status(500).json({message: "Something went wrong"})
}
}
