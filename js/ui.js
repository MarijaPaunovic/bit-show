
const uiModule = (() => {


    const arrayOfImage = [];

    function displayShows(myShows) {
        myShows.forEach(function (element) {
            const container = $('.show');
            const divContainer = $('<div>').addClass("contImg col-3 shadow p-3 mb-5 bg-white rounded");
            const img = $('<img src>').attr('src', element.image)
            const text = $('<h6>').text(element.name);

            divContainer.append(img, text);
            container.append(divContainer);

            // divContainer.append(text);
        })
    }
    return {
        displayShows
    }

})()

