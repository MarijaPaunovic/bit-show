
const uiModule = (() => {


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


//     ////////////////////////////////////
//     // let UIModule = (function () {

//         // uzeti selektor
//         const selectors = {
//             searchBox: '#search-box',
//             moviesContainer: '#movie_container',
//             oneMovieContainer: '#one_show'
//         }
    
//         // selektovano polje
    
//         const searchInput = $(selectors.searchBox);
//         const moviesContainerDiv = $(selectors.moviesContainer);
//         const oneMovieDiv = $(selectors.oneMovieContainer);
//         // uzeti vrednost iz search-a
    
//         let getDataSearh = () => {
    
//             searchData = searchInput.value;
    
//             return searchData;
//         }
    
//         // pakovanje filmova u div
    
//         // function makeListOfMovies(showLists) {
    
//         //     showLists.forEach(element => {
//         //         let movieDiv = $('<div class="col-sm-4  mt-5">');
//         //         let imgTag = $('<img>');
//         //         let linkTag = $('<a>');
//         //         imgTag.attr('src', element.image);
//         //         imgTag.css({ 'width': '100%', 'margin-bottom': '10%' });
//         //         linkTag.attr('href', `showInfoPage.html#${element.id}`);
//         //         linkTag.text(element.name);
    
//         //         movieDiv.append(imgTag);
//         //         movieDiv.append(linkTag);
//         //         moviesContainerDiv.append(movieDiv);
//         //     });
    
//         // }
    
//         function makeOneMovie(show) {
//             $('h1').text(show.name);
//             let imgDiv = $(`<div class ='col-12 col-md-6 mt-5'><img src = ${show.image} class = 'img'></img></div>`);
//             oneMovieDiv.append(imgDiv);
    
//             let seasonCastDiv = $(`<div class ='col-12 col-md-6 mt-5'><h2>Seassons(${show.seasonsList.length})</h2></div>`);
    
//             let ulSeason = $('<ul>');
//             show.seasonsList.forEach((element) => {
//                 let liTag = $(`<li>${element.startDate} - ${element.endDate}</li>`);
//                 ulSeason.append(liTag);
//             });
    
//             let ulCast = $('<ul>');
//             show.castsList.forEach((element) => {
//                 let liTag = $(`<li>${element.name}</li>`);
//                 ulCast.append(liTag);
//             })
//             seasonCastDiv.append(ulSeason);
//             seasonCastDiv.append(`<h2>Cast(${show.castsList.length})</h2>`);
//             seasonCastDiv.append(ulCast);
//             oneMovieDiv.append(seasonCastDiv);
    
//             let detailsDiv = $(`<div class = 'col-12 mt-5'><h2>Show details</h2><p>${show.details}</p></div>`);
//             oneMovieDiv.append(detailsDiv);
    
//             let akasDiv = $("<div class = 'col-12 col-md-6 mt-5'><h2>AKA’s</h2></div>")
//             let ulAkas = $('<ul>');
//             show.AKAList.forEach((element) => {
//                 let liTag = $(`<li>${element.country} - ${element.name}</li>`);
//                 ulAkas.append(liTag);
//             });
//             akasDiv.append(ulAkas);
//             oneMovieDiv.append(akasDiv);
    
//             let crewDiv = $("<div class = 'col-12 col-md-6 mt-5'><h2>Crew</h2></div>")
//             let ulCrew = $('<ul>');
//             show.crewList.forEach((element) => {
//                 let liTag = $(`<li>${element.type} - ${element.name}</li>`);
//                 ulCrew.append(liTag);
//             });
//             crewDiv.append(ulCrew);
//             oneMovieDiv.append(crewDiv);
    
//         }
    
//         function makeSearchList(name, id) {
//             let searchList = $('#search_list');
    
//             let option = $(`<option class="optionStyle">${name}</option>`);
//             option.attr('value', name);
//             option.attr('data-id', id);
//             searchList.append(option);
    
    
//         }
    
//         // return {
//         //     makeListOfMovies: makeListOfMovies,
//         //     makeOneMovie: makeOneMovie,
//         //     selectors: selectors,
//         //     makeSearchList: makeSearchList
//         // }
    
//     // })();
//     ////////////////////////////////////


