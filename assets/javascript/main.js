$(document).ready(function () {

    // array of 90s movies called topics
    var topics = ["Jurassic Park", "Titanic", "The Lion King", "10 Things I Hate About You", "Home Alone", "The Matrix", "Space Jam"]

    $("#cheeseburgers").click(function () {
        

        console.log(cheeseburgers.value);
    });
    
    
});

function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=r5rzmEF5dvBlgMheFWcsLR869s2tvSwr',
            type: 'GET',
        })
}

