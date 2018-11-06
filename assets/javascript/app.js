
    var sf = new Snowflakes();

$("#search-input").on("click", function (event) {
    event.preventDefault();

    
    var userZip = $("#zip").val().trim()

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/2/open_events?&sign=true&photo-host=public&zip=" + userZip + "&text=christmas&radius=10&page=20&key=37216631b5fb603c2f5a67701a1d";
       
    console.log(queryURL);
  

    $.ajax({
        url: queryURL,
        method: "GET"

    }).then(function (response) {
        console.log(response)

        var results = response.results;
        console.log(results);
             
        //brook google maps api call
        var map;
        function initMap() {
          var uluru = {lat: -25.344, lng: 131.036};
          var map = new google.maps.Map(
            document.getElementById('map'), {zoom: 4, center: uluru});
          var marker = new google.maps.Marker({position: uluru, map: map});
          }
        initMap();
      
       

        // for (var i = 0; i < results.length; i++) {
        //     var name = results[i].name;
        //     var description = results[i].description;

        //  $("#name").prepend(name);
        //  $("#description").append(description);
        //  }

    })          

})



    


    
    





