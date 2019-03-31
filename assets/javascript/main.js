$(document).ready(function () {
    // console.log("ready"); // document ready

    // array of 90s movies called topics
    var topics = ["Jurassic Park", "Titanic", "The Lion King", "Space Jam", "10 Things I Hate About You", "Home Alone", "The Matrix"];

    // function creates an array of buttons from "topics" array
    function createButtons() {

        $("#buttons-div").empty();

        // loops through movies array
        for (var i = 0; i < topics.length; i++) {
            // creates actual buttons
            var btn = $('<button>');
            // sets attribute data-name with movie names from array
            btn.attr('data-name', topics[i]);
            // adds display text (movie names) to button from array
            btn.text(topics[i]);
            // adds all the buttons to one class called 90s-movies
            btn.addClass('movies');
            // puts buttons in the div and appends them after one another
            $('#buttons-div').append(btn);
        }
    }
    // calls/runs function
    createButtons();


    $('.movies').click(function () {
        console.log($(this).data('name')); // test buttons pull movie names
        var movie = $(this).attr("data-name");
        // url with giphy api, api key, limit and rating parameters
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=r5rzmEF5dvBlgMheFWcsLR869s2tvSwr&rating=pg&limit=10";

        // ajax call 
        $.ajax({
            url: queryURL,
            type: 'GET',
        }).done(function (response) {
            console.log(response.data); // logs object data info
            var results = response.data;
            // loops through result gifs
            for (var i = 0; i < results.length; i++) {
                // creates div for result gifs
                var gifDiv = $('<div class=gifs>');
                // setting attributes for gifs
                var movieImg = $("<img>");
                movieImg.attr("src", results[i].images.fixed_height_still.url);
                movieImg.attr("data-still", results[i].images.fixed_height_still.url);
                movieImg.attr("data-animate", results[i].images.fixed_height.url);
                movieImg.attr("data-state", "still");
				movieImg.addClass('gif');
                // puts images in div
                gifDiv.append(movieImg)
                // 
                var pRating = $("<p>").text("Rating: " + results[i].rating);

                gifDiv.append(pRating)

                // displays gif div in gifs div re html
                $("#gifs").append(gifDiv);

                
            }


        })
    });


});