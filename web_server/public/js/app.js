 const weatherForm = document.querySelector('form');
const search = document.querySelector('input');
const messageOne = document.querySelector('#message-1');
const messageTwo = document.querySelector('#message-2');

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const location = search.value;
     messageOne.textContent = 'Loading...';
     messageTwo.textContent = '';

    fetch('http://localhost:3000/weather?address=' + location)
        .then((response) => {
            response.json().then((data) => {
                if (data.error) {
                    console.log(data.error)
                    messageOne.textContent = data.error;
                } else {
                 
                    messageOne.textContent = location;

                    const forecastData = data.forecast;
                    const forecastMessage = `Weather: ${forecastData.weather}°C. Feels like: ${forecastData.feelsLike}°C. Description: ${forecastData.description}`;
                    messageTwo.textContent = forecastMessage;

                    console.log(data.forecast);
                }
            });
        });
});
