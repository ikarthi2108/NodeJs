const request = require('request');
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url = 'http://api.openweathermap.org/data/2.5/weather?appid=7f0b96e22466c8a5ded009d6bcfde6eb&q=coimbatore&units=metric';

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log('Unable to connect to the weather service');
//     } else if (response.body.cod == 404) {
//         console.log('Unable to find the location');
//     } else {
//         console.log(response.body.coord.lon, response.body.coord.lat);
//     }
// });


// //Geocoding

// const geoCodingUrl="https://api.mapbox.com/geocoding/v5/mapbox.places/64286.json?access_token=pk.eyJ1Ijoia2F0aGkyMTA4IiwiYSI6ImNsbDF0MXhjaDA1bm4zanFndmhiYW9md3IifQ.n8gHPkJxB0PkZk4oI_B7xw&limit=1"

// request({url:geoCodingUrl,json:true},(error,response)=>{
//     if(error){
//         console.log("Unable to connect")
//     }
//     else if(response.body.features.length === 0){
//         console.log("No such places found")
//     }
//     else {
//         const latitude =response.body.features[0].center[1];
//         const  longitude =response.body.features[0].center[0];

//       console.log(latitude, longitude)
//     }

// })

const address = process.argv[2]

if (!address) {
    console.log("please provide an address")
} else {
    geocode(address, (error, data) => {
        if (error) {
            return console.log(error)
        }

        forecast(data.location, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })

    })
}






