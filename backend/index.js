const express = require('express');
const connectToDB = require('./Db');
const TaskRoute = require('./routes/TaskRoute')
var cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const PORT = 7000;
connectToDB();



app.use('/api/my/task', TaskRoute)


app.listen(PORT, () => {
    console.log(`App is listening at PORT- ${PORT}`)
})