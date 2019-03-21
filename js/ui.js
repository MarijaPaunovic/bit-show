
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
            const id = $(this).attr('data-post-id');
            localStorage.content = $(this).attr('data-post-id');
            // window.location.href = './showInfoPage.html' + '?id=' + id;
            })
        })
        
    }

    // function displaySingleShow(singleShow) {
    //     const container = $('.single-show');

    //     let seasons = '<ul>';
    //     singleShow.seasons.forEach(seasons => {
    //         seasons += `<li>${seasons.premiereDate} - ${seasons.endDate}</li>`;
    //     })
    //     seasons += '<ul>';

    //     let cast = '<ul>';
    //     singleShow.cast.forEach(cast => {
    //         cast += `<li>${cast}</li>`;
    //     }) 
    //     cast += '<ul>';

    //     container.innerHTML = `<div>
    //                             <h1>${singleShow.name}</h1>
    //                                 <div class='content'>
    //                                     <img class='poster' src='${singleShow.image}'/>
    //                                 <div class="box">
    //                                     <h3>Seasons (${singleShow.seasons.length})</h3>
    //                                     ${seasons}
    //                                     <h3>Cast</h3>
    //                                     ${cast}
    //                                 </div>
    //                                 </div>
    //                             <div class='description'>${singleShow.description}</div>
    //                             </div>`

    // }

    return {
        displayShows,
        // displaySingleShow
    }

})()

