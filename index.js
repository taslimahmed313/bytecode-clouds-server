const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 5000;

app.use(cors());

const categories = require('./data/category.json');
const courses = require('./data/course.json'); 

app.get('/', (req, res) =>{
    res.send('The Bytecode Clouds Courses Data Loading !!')
})

app.get('/categories', (req, res)=>{
    res.send(categories);
})

app.get('/course', (req, res)=>{
    res.send(courses);
})

app.get('/course/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find(course => course.category_id === id);
    res.send(selectedCourse);
})
app.get('/course/checkout/:id', (req, res)=>{
    const id = req.params.id;
    const selectedCourse = courses.find(course => course._id === id);
    res.send(selectedCourse);
})

app.listen(port, ()=>{
    console.log("Your Port are : ", port);
})

module.exports = app;