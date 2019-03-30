$(document).ready(function() {
    // document ready
    console.log("ready");

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
            btn.addClass('90s-movies');
            // puts buttons in the div and appends them after one another
            $('#buttons-div').append(btn);
        }
    }
    // calls/runs function
    createButtons();


    $('.90s-movies').click(function() {
        console.log($(this).data('name')); // test buttons pull movie names

        var movie = $(this).attr("data-name");
        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + movie + "&api_key=r5rzmEF5dvBlgMheFWcsLR869s2tvSwr";

$.ajax({
        url: queryURL,
        type: 'GET',
    }).done(function(response){
        console.log(response); // logs object data info


    })
    });



});

function searchGif(gifName) {
    
}

