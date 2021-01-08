'use strict';


//dependencies
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const superagent = require('superagent');

//start app
// specify your port
const app = express();
const PORT = process.env.PORT || 3000;
app.use(cors());
 

// Routes

app.get('/', homeHandlr);
app.get('/location', locationHandler);
app.get('/weather', weatherHandler);
app.use('*', errorHandler);


// function Handlers


function homeHandlr(request, response){
  response.status(200).send('Sup Yo');
}

function errorHandler(request, response){
  response.status(404).send('You Busted, Everythings gone wrong');
}

function locationHandler(request, response){
  let city = request.query.city;
  let key = process.env.GEOCODE_API_KEY;
  const url = `api key would go here${key}${city}`;
  const locationData = require('./data/location.json');

  superagent.get(url)
    .then( data =>{
      console.log(data.body);

    })

}

function weatherHandler(request, response){
  response.status(200).send('Sup Yo');
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


app.use(express.static('./public'));


//start server

app.listen(PORT, ()=>{
  console.log(`Listening on ${PORT}`);
});
