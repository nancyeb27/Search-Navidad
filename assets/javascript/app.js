
var sf = new Snowflakes();

$("#search-input").on("click", function (event) {
    event.preventDefault();
    var mapCounter = 0;


    var userZip = $("#zip").val().trim()

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=" + userZip + "&text=christmas&radius=10&page=5&key=37216631b5fb603c2f5a67701a1d";

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response);
        var results = response.results
      
        for (var i = 0; i < results.length; i++) {
            var name = results[i].name;
            var description = results[i].description.split("\</p\>");
            console.log("desp Arrary" + description[0]);
    
            //TESTTTTTTT
            var newRow = $("<tr>");
            newRow.append("<td>" + name + "</td>");
            newRow.append("<td>" + description[0] + "</td>");

            var mapCell = $("<td>");
            var mapDiv = $("<div>");
            mapDiv.attr("id","map" + mapCounter);
            mapCell.html(mapDiv);
            newRow.append(mapCell);
            $(".table tbody").prepend(newRow);

            // MAP DISPLAY

            var eventLat;
            var eventLon;
            
            if (!results[i].venue) {
                

            }else{
            
                eventLat = results[i].venue.lat;
                eventLon = results[i].venue.lon;

            }

            var map;
            function initMap() {
            
                var location = {lat: eventLat, lng: eventLon};
                var map = new google.maps.Map(
                document.getElementById("map" + mapCounter), {zoom: 13, center: location});
                var marker = new google.maps.Marker({position: location, map: map});
            }
            
            initMap();

            mapCounter++
            console.log("counter: " + mapCounter);
        }


    })

})













