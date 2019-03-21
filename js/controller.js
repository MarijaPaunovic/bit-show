
const controller = ((data, ui) => {

    function init() {
        console.log('App is initialized');

        // make fetch data request
        data.fetchShows(function (response) {
            console.log('CTRL', 'onSuccess', response);
            // display data
            ui.displayShows(response)
        })
    }

    return {
        init
    }

})(dataModule, uiModule)



/////////////////////////////////

// 1
// const controller = (() => {

//     const onResponse = (responseData) => {
//         uiModule.displayShows(responseData);
//     };

//     const initHomepage = () => {
//         dataModule.fetchShows(onResponse);
//     }

//     const initSingleShowPage = () => {
//         // ...
//     }

//     return {
//         initHomepage,
//         initSingleShowPage
//     }
// })()

///////////////////////////////////

// 2
// const controller = (() => {
//     const initHomepage = () => {
//         dataModule.fetchShows((shows) => {
//             uiModule.displayShows(shows);
//         });
//     }

//     const initSingleShowPage = () => {
//         // ...
//     }

//     return {
//         initHomepage,
//         initSingleShowPage
//     }
// })()
//////////////////////////////////////






///////////////////////////////////////////////////////

    //     function init() {

    //         var tvShows;
    
    //         let request = $.ajax({
    
    //             url: 'http://api.tvmaze.com/shows',
    //             method: 'GET'
    
    //         })
    
    //         request.done(function (msg) {
    //             let firsFifty = msg.slice(0, 50);
    //             tvShows = new dataModule.TvShows();
    //             firsFifty.forEach(element => {
    //                 let show = new dataModule.Show(element.name, element.image.medium, element.id, element.summary);
    
    //                 tvShows.addShow(show);
    //             });
    
    //             UIModule.makeListOfMovies(tvShows.showsList)
    //         })
    
    //         // search box
    
    //         $('#search_box').keyup(function (event) {
    //             let value = (this).value;
    
    //             let request = $.ajax({
    //                 url: `http://api.tvmaze.com/search/shows?q=${value}`,
    //                 method: 'GET'
    
    //             })
    
    //             request.done(function (msg) {
    //                 $("#serch_list").empty();
    //                 tenMsg = msg.slice(0, 10);
    //                 tenMsg.forEach(element => {
    //                     let movieName = element.show.name;
    //                     let id = element.show.id;
    //                     UIModule.makeSearchList(movieName, id);
    //                 })
    //             })
    
    //         })
    
    //         $('#search_box').change(function (event) {
    //             var value = $('#search_box').val();
    //             var element = $(`*[value='${value}']`);
    //             var id = element.attr("data-id");
    //             window.location.href = `showInfoPage.html#${id}`
    //         })
    
    //     }
    
    
    
    //     function initSinglePage() {
    
    //         $('#search_box').keyup(function (event) {
    //             let value = (this).value;
    
    //             let request = $.ajax({
    //                 url: `http://api.tvmaze.com/search/shows?q=${value}`,
    //                 method: 'GET'
    
    //             })
    
    //             request.done(function (msg) {
    //                 $("#serch_list").empty();
    //                 tenMsg = msg.slice(0, 10);
    //                 tenMsg.forEach(element => {
    //                     let movieName = element.show.name;
    //                     let id = element.show.id;
    //                     UIModule.makeSearchList(movieName, id);
    //                 })
    //             })
    
    //         })
    
    //         $('#search_box').change(function (event) {
    //             var value = $('#search_box').val();
    //             var element = $(`*[value='${value}']`);
    //             var id = element.attr("data-id");
    //             window.location.href = `showInfoPage.html#${id}`
    //             location.reload();
    //         })
    
    //         let id = window.location.hash.slice(1);
    
    //         let request = $.ajax({
    
    //             url: `http://api.tvmaze.com/shows/${id}`,
    //             method: 'GET',
    //             data: {
    //                 embed: ['seasons', 'cast', 'crew', 'akas']
    //             }
    
    //         })
    //         let show;
    //         request.done(function (msg) {
    // console.log(msg);
    //             show = new dataModule.Show(msg.name, msg.image.original, msg.id, msg.summary);
    
    //             msg._embedded.seasons.forEach((element) => {
    //                 season = new dataModule.Season(element.premiereDate, element.endDate);
    //                 show.addSeason(season);
    //             })
    
    //             msg._embedded.cast.forEach((element) => {
    //                 cast = new dataModule.Cast(element.person.name);
    //                 show.addCast(cast);
    //             })
    
    //             msg._embedded.akas.forEach((element) => {
    //                 AKA = new dataModule.AKA(element.country.name, element.name);
    //                 show.addAKA(AKA);
    //             })
    
    //             msg._embedded.crew.forEach((element) => {
    //                 crew = new dataModule.Crew(element.type, element.person.name);
    //                 show.addCrew(crew);
    //             })
    // console.log(show);
    //             UIModule.makeOneMovie(show);
    
    //         })
    

        ///////////////////////////////////////////////////////
    