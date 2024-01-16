
//  Backend task
//
//  Generate a backend service to calculate the weather average for a country
//  Request: /report with country code 
//
//  Result: average temperature, humidity and probability of precipitation over next 5 days
//          Summary: 
//             > 90% of grids > 80    - hot
//             > 80% of grids > 70-80 - warm
//             else                   - mixed
//
//  Weather API service: https://www.weather.gov/documentation/services-web-api
//  by grid:
//    - https://api.weather.gov/gridpoints/{office}/{gridX},{gridY}/forecast
//    - https://api.weather.gov/gridpoints/TOP/31,80/forecast
//
//  DB table
//    - table country
//    - columns: code | gridX | gridY
//

import express from "express";

const app = express();
const port = 3300;

app.get('/report', (req, res) => {
  console.log("Accessing report endpoint");
  console.log(req);
  res.send('Express + TypeScript Server - Hello World! Now! Today');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
