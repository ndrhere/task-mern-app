const mongoose = require('mongoose');
const mongoURI = "mongodb://127.0.0.1:27017/task?directConnection=true"

const connectToMongo = async () => {
try{
mongoose.connect(mongoURI);
console.log("MongoDB connected successfully!")
}catch(error){
    console.log("Error connecting DB", error)
}
}


module.exports = connectToMongo