const express = require("express")
const exphbs = require('express-handlebars')
const moment = require('moment')
const port = 3000

const app = express()

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');



app.get("/", (req, res) => {
    res.render('home')
})

app.get("/associations/:name", (req, res) => {
    res.render(`${req.params.name}`)
})

app.get('/admin', (req, res) => {
    res.render('admin')
})

app.get('/form/contact', (req, res) => {
    res.render('contact')
})

app.use(express.urlencoded({ extended: true }))

app.post('/form/contact', (req, res) => {

    console.log(`req.body`, req.body.username)

    res.render('admin', {

        username: req.body.username,
        password: req.body.password,
        date: moment().format(' hh:mm:ss a')
        
    })
})

app.listen(port)