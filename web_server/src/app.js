const express = require('express')

const app = express()

app.get('',(req,res)=>{
   res.send("<h1>Hello Express</h1>")
})

app.get('/help',(req,res)=>{
    res.send([{name:'kk'},{age:21}])
})

app.get('/about',(req,res)=>{
    res.send('<h1>Ithu About page</h1>')
})

app.get('/weather',(req,res)=>{
    res.send({
        city:"Coimbatore",
        forecast:"It feels like 25 degrees out there!"
    })
})

app.get('/products',(req,res)=>{
    res.send("Wanna buy the products")
})


//app.com
//app.com/help
//app.com/about

app.listen(3000,() => {
    console.log('Server started on 3000')
})