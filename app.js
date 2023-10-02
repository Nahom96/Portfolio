// Imports
const express = require('express')
const app = express()
const path = require('path')
const port = 8081

// Set Views
app.set('views', './views')
app.set('view engine', 'ejs')

// Statics

app.use(express.static(__dirname + '/public'));


// Routes for views
app.get('', (req, res) => {
    res.render('index')
})

app.get('/about', (req, res, next) => {
    res.render('about', {text: 'About Page'})
})

app.get('/project', (req, res, next) => {
    res.render('project', {text: 'This is S'})
})

app.get('/services', (req, res, next) => {
    res.render('services', {text: 'About Page'})
})
app.get('/contact', (req, res, next) => {
    res.render('contact', {text: 'This is S'})
})


// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))

