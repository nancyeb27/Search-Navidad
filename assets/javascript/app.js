

$("#search-input").on("click", function (event) {
    event.preventDefault();

    // This line grabs the input from the textbox
    var newEvent = $("#Search").val().trim();

    var queryURL = "https://cors-anywhere.herokuapp.com/https://api.meetup.com/find/upcoming_events?zip=" + userZip +"&radius=100.0&text=christmas&key=37216631b5fb603c2f5a67701a1d";
    console.log(queryURL);
    var userZip = $("#zip").val().trim().

    $.ajax({
        url: queryURL,
        method: "GET"

    }).done(function (response) {

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            console.log(response);
        }

    })
              

})



    
