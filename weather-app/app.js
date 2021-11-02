const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
console.log(address);
if (!address) {
  console.log("Please enter the location");
} else {
  geocode(address, (error, { latitude, longitude, location } = {}) => {
    if (error) {
      return console.log(error);
    }
    forecast(longitude, latitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      }
      console.log(location);
      console.log(forecastData);
    });
  });
}

// pk.eyJ1IjoidGFubWF5LXNoYWgiLCJhIjoiY2tqM3didWt3MGY1bTJybzk0dHVzbHU3OCJ9.tkf9N3iGnZWvjuOwqu1JKA
