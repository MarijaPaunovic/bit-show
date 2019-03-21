
const uiModule = (() => {


    function displayShows(myShows) {
        const container = $('.show');

        myShows.forEach(function (element) {
            const divContainer = $('<div>')
                .addClass("contImg col-3 shadow p-3 mb-5 bg-white rounded")
                .attr('data-post-id', element.id);

            const img = $('<img src>').attr('src', element.image);
            const text = $('<h6>').text(element.name);
            const rating = $('<p>').text(element.rating);

            divContainer.append(img, text, rating);
            container.append(divContainer);

            $(divContainer).on('click', function (event) {
                console.log($(this).attr('data-post-id'));
                localStorage.content = $(this).attr('data-post-id');
            })

        })

    }

    return {
        displayShows
    }

})()


////////////////////////////////

// 1
// const uiModule = (() => {
//     const displayShows = (shows) => {
//         const showsList = shows
//             .slice(50)
//             .map(show => `<p data-show-id="${show.id}">${show.name}</p>`)
//             .join("");

//         $('.shows').append(showsList);
//     }

//     return {
//         displayShows
//     }
// })()

////////////////////////////////

// 2
// const uiModule = (() => {
//     const displayShows = (shows) => {
//         const showsList = shows
//             .slice(50)
//             .map(show => `<p data-show-id="${show.id}">${show.name}</p>`)
//             .join("");

//         $('.shows').append(showsList);
//     }

//     return {
//         displayShows
//     }
// })()

