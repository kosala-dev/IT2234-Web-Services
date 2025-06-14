const express = require('express');
const app =express();
const port=3001;
const mongoose = require('mongoose')

const bookRoute = require('./routes/bookRoute');
const borrowRoute = require('./routes/borrowRoute');
const studentRoute = require('./routes/studentRoute');
const userRoute = require('./routes/userRoute');

app.use(express.json())
app.use('/Book', bookRoute);
app.use('/Borrow', borrowRoute);
app.use('/Student', studentRoute);
app.use('/User', userRoute);

mongoose.connect('mongodb://localhost:27017/LibAppDB').then(()=>{
    console.log("Database connected")
}).catch((error)=>{
    console.error(error);   
})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})