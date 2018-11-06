
var sf = new Snowflakes();

$("#search-input").on("click", function (event) {
    event.preventDefault();



    var userZip = $("#zip").val().trim()

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=" + userZip + "&text=christmas&radius=10&page=5&key=37216631b5fb603c2f5a67701a1d";

    $.ajax({
        url: queryURL,
        method: "GET"


    }).then(function (response) {
       
        var results = response.results;
        console.log(results);

        for (var i = 0; i < results.length; i++) {
            var name = results[i].name;
            var description = results[i].description.split("\</p\>");
            console.log("desp Arrary" + description[0]);
            // $("#name").append(name);
            // $("#description").append(description[0]);
            var newRow = $("<div>").addClass("row")
            .append(name);
            $("#name").append(newRow);
            var newDep = $("<div>").addClass("row")
            .append(description[0]);
            $("#description").append(newDep);
            
            //     var newRow = $("<tr>").append(
            //         $("<td>").text(name),
            //         $("<td>").text(description[0]),
            //         $("<td>").text(googlemap),


            //     );


            //     $("#event-table").children("tbody").append(newRow);
            //     console.log(newRow);

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
            
            initMap();

        }

    })

})













