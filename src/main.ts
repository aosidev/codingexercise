
// Backend task
// Generate a backend service for a weather report to be generated as docx or pdf
// Can be triggered via REST API
//
// Options:
//  short / detailed report
//  coordinates
//  filetype
//
// Detailed report:
//  Text summary 
//  14 days:
//     - Icon
//     - Temperature 
//     - Precipitation probability
//     - Dewpoint
//     - Humidity 
//  Average for each week:
//     - min, max values per week
// 
// Short report:
//  Two large icons - Hot / warm /cool + Rain / no-rain
//    Hot - 5 days daily > 90 degrees
//    Warm - 5 days daily 80 - 90 degrees
//    Cool - 5 days average 70 - 80 degrees
//    Mixed - temperatures are not in one category
//    Rain - 5 days average precipitation chance > 50%
//    No Rain - 5 days average precipitation chance < 50%
//
//  Weather API service: https://www.weather.gov/documentation/services-web-api
//  by grid:
//    - https://api.weather.gov/gridpoints/{office}/{gridX},{gridY}/forecast
//    - https://api.weather.gov/gridpoints/TOP/31,80/forecast
//  long/lat to grid url:
//    - https://api.weather.gov/points/{latitude},{longitude}
//    - https://api.weather.gov/points/39.7456,-97.0892
//

import express from "express";

const app = express();
const port = 3300;

app.get('/report', (req, res) => {
  console.log("Accessing report endpoint");
  console.log(req);
  res.send('Express + TypeScript Server - Hello World!');
});

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});
