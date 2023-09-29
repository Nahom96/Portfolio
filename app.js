// Imports
const express = require('express')
const app = express()
const port = 8081

// Set Views
app.set('view engine', 'ejs')

// Statics
// Routes

app.get('', (req, res) => {
    res.render('index', {text: 'This is S'})
})

app.get('/about', (req, res) => {
    res.render('about', {text: 'About Page'})
})

app.get('/project', (req, res) => {
    res.render('project', {text: 'This is S'})
})

app.get('/services', (req, res) => {
    res.render('services', {text: 'About Page'})
})
app.get('/contact', (req, res) => {
    res.render('contact', {text: 'This is S'})
})


// Listen on port 3000
app.listen(port, () => console.info(`Listening on port ${port}`))

