const express = require('express');
const app = express();
const port = 3001;
const mongoose = require('mongoose');
const errorHandleMid = require('./middlewares/errorHandler')

const projects = require('./models/Project')
const tasks = require('./models/Task')
const users = require('./models/User')

const projectrt = require('./routes/projectroute')
const taskrt = require('./routes/taskroute')
const userrt = require('./routes/userroute')


app.use(express.json())
app.use(errorHandleMid)
app.use('/Project', projectrt)
app.use('/Task', taskrt)
app.use('/User', userrt)


mongoose.connect('mongodb://localhost:27017/ProjectDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})

