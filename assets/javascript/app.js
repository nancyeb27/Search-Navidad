
var sf = new Snowflakes();

$("#search-input").on("click", function (event) {
    event.preventDefault();



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
            newRow.append("<td>" + name + "<td>");
            newRow.append("<td>" + description[0] + "<td>");
            $(".table tbody").append(newRow);

            // MAP DISPLAY

            var eventLat;
            var eventLon;
            
            if (!results[i].venue) {
                

            }else{
            
                eventLat = results[i].venue.lat;
                eventLon = results[i].venue.lon;

            }

            console.log("Test:" + eventLat);
            console.log("TestLon:" + eventLon);

            var map;
            function initMap() {
            
                var location = {lat: eventLat, lng: eventLon};
                var map = new google.maps.Map(
                document.getElementById('map'), {zoom: 13, center: location});
                var marker = new google.maps.Marker({position: location, map: map});
            }
             // $("<div>").attr("id", "map" + results[i])
            initMap();
        }

        var marker = new google.maps.Marker({
            position: {lat: eventLat, lng: eventLon},
            title:"Hello World!"
        });

    })

})













