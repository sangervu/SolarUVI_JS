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

function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition);
    } else {
      document.getElementById("demo20").innerHTML = "Geolocation is not supported by this browser.";
    }
  }
  
  function showPosition(position) {
    locations.setLatitude(position.coords.latitude);
    locations.setLongitude(position.coords.longitude);
    document.getElementById("demo20").innerHTML = "Latitude: " + position.coords.latitude +
    "<br>Longitude: " + position.coords.longitude;
  }