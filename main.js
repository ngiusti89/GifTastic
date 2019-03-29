function searchGif(gifName) {
    $.ajax({
            url: 'https://api.giphy.com/v1/gifs/search?q= ' + gifName + ' &api_key=r5rzmEF5dvBlgMheFWcsLR869s2tvSwr',
            type: 'GET',
        })
}