

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
    //brook google maps api call
    var map;
    function initMap() {
        var uluru = {lat: -25.344, lng: 131.036};
        var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
    
        var marker = new google.maps.Marker({position: uluru, map: map});
      }
    
      initMap();

})

    
    





