'use strict'

require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT;
app.use(cors());

app.use('*', (request,response)=> {
  response.send('404 does not exsist')
});

// Routes

app.get('/', homeHandlr);
app.get('/location', locationHandler);
app.get('/weather', wtrHandler);
app.use('*', errorHandler);

function homeHandlr(request, response){
  response.send('Sup Yo');
}

function errorHandler(request, response){
  response.status(500).send('You Busted, Everythings gone wrong');
}

function locationHandler(request, response){
  const locationData = require('./data/location.json');
}


//Constructor
function Location(city, LocationData){
  this.search_query = city;
  this.formatted_query = geoData[0].display_name;
  this.latitude = geoData[0].lat;
  this.longitude = geoData[0].lon;
}

function Weather(data){
  this.forecast = data.weather.description;
  let date = Date.parse(data.datetime);
  this.time = new Date(date).toDateString();
}

//start server

app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`);
}