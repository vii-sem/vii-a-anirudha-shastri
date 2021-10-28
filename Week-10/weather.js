/*jshint esversion:6*/
request = require('request');

const url = "http://api.weatherstack.com/current?access_key=441f6c3b98d85e3d81e393429ed26150&query=india&units=f";

request({
  url: url
}, (err, response) => {
  const data = JSON.parse(response.body);

  console.log("The current temperatrue is ", data.current.temperature);
  console.log("Country is", data.location.country);

});