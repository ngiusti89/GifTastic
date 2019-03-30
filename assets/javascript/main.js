$(document).ready(function () {
    // document ready
    console.log("ready");

    // array of 90s movies called topics
    var topics = ["Jurassic Park", "Titanic", "The Lion King", "10 Things I Hate About You", "Home Alone", "The Matrix", "Space Jam"]

    // function creates an array of buttons from "topics" array
    function createButtons() {
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
    // calls function
    createButtons();

    $('.90s-movies').click(function() {
        // test buttons pull names
        console.log($(this).data('name'));




        
      });



});

// function searchGif(gifName) {
//     $.ajax({
//         url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=r5rzmEF5dvBlgMheFWcsLR869s2tvSwr',
//         type: 'GET',
//     })
// }

