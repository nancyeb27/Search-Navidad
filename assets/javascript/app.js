

//Nancy meetup API call
var x = $(this).attr("show-button");
console.log(x);

var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?zip=80209&radius=100.0&text=christmas&key=37216631b5fb603c2f5a67701a1d";
console.log(queryURL);

$.ajax({
    url: queryURL,
    method: "GET"
}).done(function (response) {
    console.log(response);

})

    //brook google maps api call
    var map;
    function initMap() {
        map = new google.maps.Map(document.getElementById('map'), {
          center: {lat: -34.397, lng: 150.644},
          zoom: 8
        });
      }
//   initMap();




