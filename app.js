require('dotenv').config();
const express = require('express');
const getWeatherData = require('./utils/weatherData');
const app = express();
const PORT = process.env.PORT || 5000;


app.listen(PORT,()=>{
    console.log(`Server is live on http://localhost:${PORT}`)
})

app.get('',(req,res)=>{
    if(!req.query.address){
        return res.send({
            error:'you must provide address to get weather data'
        })
    }
    getWeatherData(req.query.address,(e,d)=>{
        if(e){
            return res.send(e);
        }
        res.send(d);
    })
})

app.get('*',(req,res)=>{
    res.send({
        error:'page not found'
    })
})