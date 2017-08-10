const API = "9F2TmIoIGuXwjmrztAa12q2ldzuJPYD6e8n6HoK8";

const charlestonLat = "79.9311";
const charlestonLong = "32.7765";

const url = `https://api.nasa.gov/planetary/earth/assets?lon=${charlestonLong}&lat=${charlestonLat}&api_key=${API}`

const img = `https://proxy.calweb.com/https://images-api.nasa.gov/earth/assets?LC8_L1T_TOA/LC82110022017071LGN00$api_key=${API}`

fetch(img).then(function (data) {
  return data.json();
}).then(function(data) {
  console.log(data);
});
