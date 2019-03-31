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
            // empties the div of gifs to make room for more
            $('#gifs').empty();
            // loops through result gifs
            for (var i = 0; i < results.length; i++) {
                // creates div for result gifs
                var gifDiv = $('<div class=gifs>');
                // creates variable for movie gifs & sets attributes them
                var movieImg = $("<img>");
                movieImg.attr("src", results[i].images.fixed_width_still.url);
                movieImg.attr("data-still", results[i].images.fixed_width_still.url);
                movieImg.attr("data-animate", results[i].images.fixed_width.url);
                movieImg.attr("data-state", "still");
                movieImg.addClass('gif');
                // puts images in div after one another
                gifDiv.append(movieImg)
                // creates ratings varible and adds display text of "Rating: " followed by rating pulled from objects data
                var pRating = $("<p>").text("Rating: " + results[i].rating);
                // // // test for ratings
                // // var rating = results[i].rating
                // // console.log(rating);
                // appends rating to gifs
                gifDiv.append(pRating)
                // displays gif in div
                $("#gifs").append(gifDiv);
            }
        })
    });


    // click function to toggle between displaying still or animated gifs
    $(document).on('click', '.gif', function () {
        // // // tried a different way to write that function, didnt work
        // // $('.gif').on("click", function(){
        var state = $(this).attr("data-state");
        // // logs if still or animated
        // console.log(state)
        if (state == "still") {
            $(this).attr("src", $(this).data("animate"));
            $(this).attr("data-state", "animate");
        } else {
            $(this).attr("src", $(this).data("still"));
            $(this).attr("data-state", "still");
        }

    })


    var movieInput = $('<input type="text" id="movie-input" />');
    var submit = $('<input type="button" value="Submit" class="submit" id="add-movie">');

    $(document).on('click', '#add-movie', function () {
        console.log("submit") // tests created button clicks
        event.preventDefault();
        var userInput = $('#movie-input').val().trim();
        console.log(userInput) // tests text being pulled from input
        // adds input to topics array
        topics.push(userInput);
        // creates the new button
        createButtons();

    })

    $("#gifs").prepend(movieInput).after(submit)


});