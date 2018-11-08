
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
         


        var imgArray = ["images/Image1.jpeg", "images/Image2.jpg", "images/Image3.jpg", "images/Image4.jpeg", "images/Image5.jpg"]; 

      //   for (var i = 0; i < imgArray.length; i++){
      //     var img = document.createElement('img');
      //     img.src = "Image1.jpeg";
      //     img.src = "Image2.jpg";
      //     img.src = "Image3.jpg";
      //     img.src = "Image4.jpeg";
      //     img.src = "Image5.jpg";
      //     name.appendChild(img);
      // };



        for (var i = 0; i < results.length; i++) {
            var name = results[i].name;
            var description = results[i].description.split("\</p\>");
            //var img = document.createElement("img");
            //img.src = imgArray[i];
            //name.append(img);
            console.log("desp Arrary" + description[0]);

        
            //TESTTTTTTT
            var newRow = $("<tr>");
            var newData = $("<td>");
            var newImg = $("<img>");
            //newImg = imgArray[i];

            newImg.attr('src', imgArray[i]);
            newData.append(name);
            newData.append(newImg);
            newRow.append(newData);
            //newRow.append("<td>" + name + "<td>");
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


