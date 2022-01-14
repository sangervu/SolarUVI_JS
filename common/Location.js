let locations = {
  longitude: 24.90,
  latitude: 60.20,

  setLongitude(lon) {
    this.longitude = lon;
  },
  setLatitude(lat) {
    this.latitude = lat;
  }
}

const getLocation = () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else {
    document.getElementById("demo24").innerHTML = "Geolocation is not supported by this browser.";
  }
};

const showPosition = position => {
  const mapLink = document.querySelector('#map-link');
  locations.setLatitude(position.coords.latitude);
  locations.setLongitude(position.coords.longitude);
  myFunctions();
  document.getElementById("demo24").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  mapLink.href = `https://www.openstreetmap.org/#map=18/${locations.latitude}/${locations.longitude}`;
  mapLink.textContent = `Latitude: ${locations.latitude} °, Longitude: ${locations.longitude} °`;
};

const newLocation = () => {

  const mapLink = document.querySelector('#map-link');
  var x = parseFloat(document.getElementById("lat").value);
  var y = parseFloat(document.getElementById("lon").value);

  locations.setLatitude(x);
  locations.setLongitude(y);
  myFunctions();

  document.getElementById("demo24").innerHTML = "Latitude: " + x +
    "<br>Longitude: " + y;

  mapLink.href = `https://www.openstreetmap.org/#map=18/${locations.latitude}/${locations.longitude}`;
  mapLink.textContent = `Latitude: ${locations.latitude} °, Longitude: ${locations.longitude} °`;
};