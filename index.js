const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

app.get('/', (req, res) =>{
    res.send('The Bytecode Clouds Courses are Coming !!')
})

app.listen(port, ()=>{
    console.log("Your Port are : ", port);
})