
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
        var results = "";
        results = response.results;
         
        var imgArray = ["images/Image1.jpeg", "images/Image2.jpg", "images/Image3.jpg", "images/Image4.jpeg", "images/Image5.jpg"]; 

        for (var i = 0; i < results.length; i++) {
            var name = results[i].name;
            var description = results[i].description.split("\</p\>");
            console.log("desp Arrary" + description[0]);
    
            var newRow = $("<tr>");

            
            var newData = $("<td>");
            var newImg = $("<img>");

            newImg.attr('src', imgArray[i]);
            newData.append(name);
            newData.append(newImg);
            newRow.append(newData);
            newRow.append("<td>" + description[0] + "</td>");

            var mapCell = $("<td>");
            var mapDiv = $("<div>");
            mapDiv.attr("id","map" + mapCounter);
            mapCell.html(mapDiv);
            newRow.append(mapCell);

            $(".table tbody").prepend(newRow);

            // MARKER DISPLAY

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
                document.getElementById("map" + mapCounter), {zoom: 13, center: location});
                var marker = new google.maps.Marker({position: location, map: map});
            }
            
            initMap();

            mapCounter++
            console.log("counter: " + mapCounter);
        }

    })

  });
//countdown timer

    const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

let countDown = new Date('Dec 25, 2018 00:00:00').getTime(),
  x = setInterval(function() {

    let now = new Date().getTime(),
        distance = countDown - now;

    document.getElementById('days').innerText = Math.floor(distance / (day)),
      document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour)),
      document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute)),
      document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);
    
    //do something later when date is reached
    //if (distance < 0) {
    //  clearInterval(x);
    //  'christmas is here!;
    //}
    

}, second)


