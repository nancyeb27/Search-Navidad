
    var sf = new Snowflakes();

$("#search-input").on("click", function (event) {
    event.preventDefault();

    var userZip = $("#zip").val().trim()
    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=" + userZip + "&text=christmas&page=20&key=37216631b5fb603c2f5a67701a1d";
    console.log(queryURL);
    var userZip = $("#zip").val().trim()

    $.ajax({
        url: queryURL,
        method: "GET"

    }).done(function (response) {
        console.log(response);
        var results = response.results
         
      
        for (var i = 0; i < results.length; i++) {

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
                // var marker = new google.maps.Marker({position: location, map: map});
            }
             
            initMap();
            // var marker = new google.maps.Marker({position: location, map: map});
        }

        var marker = new google.maps.Marker({
            position: {lat: eventLat, lng: eventLon},
            title:"Hello World!"
        });

    })
              

})



    


    
    





