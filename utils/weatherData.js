require('dotenv').config();
const request = require('request');

const getWeatherData = (address, callback) => {
    const url = 'https://api.openweathermap.org/data/2.5/weather?q=' + encodeURIComponent(address) + '&units=metric&appid='+process.env.API_KEY;
   
    request({ url, json: true }, (e, {body}) => {
        // const data = JSON.parse(res.body); //since json:true
        if (e) {
            callback("Unable to connect", undefined);
        } else if (body.message) {
            callback(body.message, undefined);
        }
        else {
            callback(undefined, {condition:body.weather[0].main ,maintemp:body.main["temp"],feellike:body.main["feels_like"]});
        }
    })

}

module.exports = getWeatherData;