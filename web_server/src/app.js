const path = require('path')

const express = require('express')
const hbs = require('hbs')

const app = express()

//define paths for express config
const publicdir = path.join(__dirname, '../public')
const viewspath = path.join(__dirname, '../templates/views')//if we change the dir name from views to template so we have to do this step
const partialsPath = path.join(__dirname, '../templates/partials')


//setup handlebars enine and views location
app.set('view engine', 'hbs')//Using of handlebars for the dynamic contents
app.set('views', viewspath)//alsso we to do this like we do for viewpath
hbs.registerPartials(partialsPath)


//setup static directory to serve
app.use(express.static(publicdir))

app.get('', (req, res) => {
    res.render('index', { title: "Weather", name: "10.08.2023" })
})

app.get('/about', (req, res) => {
    res.render('about', { title: "Tiger ", name: "Greatest Comeback" })
})

app.get('/help', (req, res) => {
    res.render('help', {
        title: "An help Note by tiger",
        name: "To save you have to contact tiger muthuvel pandiyan"
    })
})


app.get('/weather', (req, res) => {
    res.send({
        title: "Coimbatore",
        name: "It feels like 25 degrees out there!"
    })
})

app.get('/products', (req, res) => {
    res.send("Wanna buy the products")
})

app.get('/help/*',(req,res)=>{
 res.render('errorpage',{title:'404',
 message:"OOPS!page not found Error 404",name:"karthikeyan"
})
})

app.get('*',(req,res)=>{
    res.render('errorpage',{message:"OOPS!page not found Error 404",name:"karthikeyan"})
})


app.listen(3000, () => {
    console.log('Server started on 3000')
})