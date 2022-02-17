const express = require('express')
const path = require('path')


const app = express()

app.set('view engine','hbs')
app.set('templates',path.join(__dirname,'../templates'))

app.use(express.static(path.join(__dirname,'../public')))

app.get('', (req, res) => {
    res.render('index')
})


app.get('/help', (req, res) => {
    res.send([{
        name: 'Andrew'
    }, {
        name: 'Sarah'
    }])
})

app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather', (req, res) => {
    res.send({
        forecast: 'It is snowing',
        location: 'Philadelphia'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000.')
})