const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/category.json');
const courses = require('./data/course.json'); 

app.get('/', (req, res) =>{
    res.send('The Bytecode Clouds Courses are Coming !!')
})

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/course', (req, res)=>{
    res.send(courses);
})

app.listen(port, ()=>{
    console.log("Your Port are : ", port);
})

module.exports = app;