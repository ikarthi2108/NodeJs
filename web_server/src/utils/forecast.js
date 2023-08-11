const request = require('request')

const forecast = (address, callback) => {
    const url = 'http://api.openweathermap.org/data/2.5/weather?appid=7f0b96e22466c8a5ded009d6bcfde6eb&q=' + encodeURIComponent(address) + '&units=metric';

    request({ url: url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect to location services', undefined)
        }
        else if (response.body.cod == 404) {
            callback('Unable to find location,Try another location',undefined)
        }
        else{
            callback(undefined,
                {
                    weather:response.body.main.temp,
                    feelsLike:response.body.main.feels_like,
                    description:response.body.weather[0].description
                })
        }
    })

}



module.exports = forecast