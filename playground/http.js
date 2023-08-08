const http = require('http');

const url = 'http://api.openweathermap.org/data/2.5/weather?appid=7f0b96e22466c8a5ded009d6bcfde6eb&q=coimbatore&units=metric';

const request = http.request(url, (response) => {
   let data = ''
    response.on('data', (chunk) => {
        data = data +chunk.toString()
      
    })
    response.on('end', () => {
        const body =JSON.parse(data)
        console.log(body)
    })
})
request.on('error',(error) => {
    console.log('An error',error)
})

request.end()