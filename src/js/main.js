if (document.getElementById('mobile')) {
  var positive = document.getElementById('btn-positive');
  var negative = document.getElementById('btn-negative');

  var soundDir = "./assets/sounds/";
  var onPosition = function(location){
    console.log("initial position was received");
  };

  var getPosition = function (options) {
    return new Promise(function (resolve, reject) {
      navigator.geolocation.getCurrentPosition(resolve, reject, options);
    });
  };

  function logLocation(type){
    getPosition()
    .then((position) => {
      console.log("position received");
    })
    .catch((error) => {
      console.error(error);
    });
  }

  // check if geolocation is supported and do a first call to get user permission
  if(navigator.geolocation){
    navigator.geolocation.getCurrentPosition(onPosition);
  }

  var bikeBell = new Audio(soundDir + 'bike-bellx3.wav');
      bikeBell.loop = false;

  var airHorn = new Audio(soundDir + 'air-horn.mp3');
      airHorn.loop = false;

  positive.onclick = function() {
    console.log(':D');
    bikeBell.play();
    logLocation("positive");
  };

  negative.onclick = function() {
    console.log(':0');
    airHorn.play();
  };
}

if (document.getElementById('map-page')) {
  mapboxgl.accessToken = 'pk.eyJ1IjoibWQtZnVydGhlcm1vcmUiLCJhIjoiY2ozZnAwcmoyMDAwZDMzcDlldnZ5OTc1MyJ9.uSeNdCs1ZiuXLO2e7ToJIg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v10',
    center: [-0.127758, 51.507351],
    zoom: 13
  });
}
