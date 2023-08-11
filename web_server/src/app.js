const path = require('path')
const express = require('express')
const hbs = require('hbs')
const { request } = require('http')
const geocode=require('./utils/geocode')

const forecast = require('./utils/forecast')


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
    if(!req.query.address){
        return res.send({
            error:"You Must provide an search term"
        })
    }

       geocode(req.query.address,(error,{location}={})=>{ //{}setting an default obj bcoxz we destructure the attributes
        if(error){
            return res.send({error})
        }
        forecast(location,(error,forecastData) => {
            if(error){
                return res.send({error})
            }
            res.send({
                forecast:forecastData,
                address:req.query.address
            })
        })
       })    

})


app.get('/products', (req, res) => {
    if(!req.query.search){
       return res.send({
            error:"You Must provide an search term"
        })
    }
    console.log(req.query)
    res.send({
        products:[]
    })
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