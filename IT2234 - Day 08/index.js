const express = require('express');
const app = express();
const port = 3001;

const Studentroute = require('./StudentRoute')

app.use(express.json())
app.use('./student', Studentroute)

app.listen(port, ()=>{
    console.log(`Server is running on ${port}`);
})