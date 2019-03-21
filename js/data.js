
const dataModule = (() => {


    class Show {
        constructor(id, name, image, rating) {
            this.id = id;
            this.name = name;
            this.image = image;
            this.rating = rating;
        }
        getInfo() {
            return `ID: ${this.id}, NAME: ${this.name}, IMAGE: ${this.image}, RATING: ${this.rating}`
        }
    }

    
    function fetchShows(onSuccess) {
        // console.log('DATA', 'fetchShows');

        const showsRequestUrl = 'http://api.tvmaze.com/shows';
        

        $.get(showsRequestUrl, function (showsArray) {
            // console.log("DATA", "GET request finished", showsArray);

            const myShows = showsArray.slice(0, 51).map((show) => {
                const { id, name, image, rating } = show;
                return new Show(id, name, image.medium, rating.average)
            });
            // console.log(myShows);
            onSuccess(myShows);

        }).fail(function () {
            console.log("Error.")
        })

    }
    return {
        fetchShows
    }
})()


/////////////////////////////////////

// 1
// const dataModule = (() => {

//     const fetchShows = (onSuccess) => {
//         $.get('http://api.tvmaze.com/shows', onSuccess)
//     }

//     return {
//         fetchShows
//     }
// })()

/////////////////////////////////////

// 2
// const dataModule = (() => {

//     const fetchShows = (onSuccess) => {
//         $.get('http://api.tvmaze.com/shows', (responseData) => {
//             // ...
//             // ...
//             onSuccess(responseData);
//         })
//     }

//     return {
//         fetchShows
//     }
// })()






////////////////////////////////////

// class Season {

//     constructor(startDate, endDate) {
//         this.startDate = startDate;
//         this.endDate = endDate;
//     }
// }


// class Cast {
    
//     constructor(name) {
//         this.name = name;
//     }
// }

// // class AKA {
    
// //     constructor(country, name) {
// //         this.country = country;
// //         this.name = name;
// //     }
// // }

// class Crew {
//     constructor(type, name) {
//         this.type = type;
//         this.name = name;
//     }
// }

// class Show {

//     constructor(name, image, id, details) {
//         this.name = name;
//         this.image = image;
//         this.id = id;
//         this.seasonsList = [];
//         this.castsList = [];
//         // this.AKAList = [];
//         this.crewList = [];
//         this.details = details
//     }
//     addSeason(season) {
//         this.seasonsList.push(season);
//     }
//     addCast(cast) {
//         this.castsList.push(cast);
//     }
//     // addAKA(AKA) {
//     //     this.AKAList.push(AKA);
//     // }
//     addCrew(crew) {
//         this.crewList.push(crew);
//     }
// }

// class TvShows {

//     constructor() {
//         this.showsList = [];
//         this.limit = 50;
//     }
//     addShow(show) {
//         this.showsList.push(show);
//     }
//     getShow(id){
        
//         let result =  this.showsList.filter(show => show.id == id);
//         if(result.length){
//             return null;
//         }
//         return result[0];

//     }

// }

// return {
//     Season: Season,
//     Cast: Cast,
//     AKA: AKA,
//     Crew: Crew,
//     Show: Show,
//     TvShows: TvShows
// }


        // // search box

        // $('#search_box').keyup(function (event) {
        //     let value = (this).value;

        //     let request = $.ajax({
        //         url: `http://api.tvmaze.com/search/shows?q=${value}`,
        //         method: 'GET'

        //     })

        //     request.done(function (msg) {
        //         $("#serch_list").empty();
        //         tenMsg = msg.slice(0, 10);
        //         tenMsg.forEach(element => {
        //             let movieName = element.show.name;
        //             let id = element.show.id;
        //             UIModule.makeSearchList(movieName, id);
        //         })
        //     })

        // })

        // $('#search_box').change(function (event) {
        //     var value = $('#search_box').val();
        //     var element = $(`*[value='${value}']`);
        //     var id = element.attr("data-id");
        //     window.location.href = `showInfoPage.html#${id}`
        // })


        // // single page

        // function initSinglePage() {

        //     $('#search_box').keyup(function (event) {
        //         let value = (this).value;
    
        //         let request = $.ajax({
        //             url: `http://api.tvmaze.com/search/shows?q=${value}`,
        //             method: 'GET'
    
        //         })
    
        //         request.done(function (msg) {
        //             $("#serch_list").empty();
        //             tenMsg = msg.slice(0, 10);
        //             tenMsg.forEach(element => {
        //                 let movieName = element.show.name;
        //                 let id = element.show.id;
        //                 UIModule.makeSearchList(movieName, id);
        //             })
        //         })
    
        //     })
    
        //     $('#search_box').change(function (event) {
        //         var value = $('#search_box').val();
        //         var element = $(`*[value='${value}']`);
        //         var id = element.attr("data-id");
        //         window.location.href = `showInfoPage.html#${id}`
        //         location.reload();
        //     })
    
        //     let id = window.location.hash.slice(1);
    
        //     let request = $.ajax({
    
        //         url: `http://api.tvmaze.com/shows/${id}`,
        //         method: 'GET',
        //         data: {
        //             embed: ['seasons', 'cast', 'crew'] // , 'akas'
        //         }
    
        //     })
        //     let show;
        //     request.done(function (msg) {
        //     console.log(msg);
        //         show = new dataModule.Show(msg.name, msg.image.original, msg.id, msg.summary);
    
        //         msg._embedded.seasons.forEach((element) => {
        //             season = new dataModule.Season(element.premiereDate, element.endDate);
        //             show.addSeason(season);
        //         })
    
        //         msg._embedded.cast.forEach((element) => {
        //             cast = new dataModule.Cast(element.person.name);
        //             show.addCast(cast);
        //         })
    
        //         // msg._embedded.akas.forEach((element) => {
        //         //     AKA = new dataModule.AKA(element.country.name, element.name);
        //         //     show.addAKA(AKA);
        //         // })
    
        //         msg._embedded.crew.forEach((element) => {
        //             crew = new dataModule.Crew(element.type, element.person.name);
        //             show.addCrew(crew);
        //         })
        //         console.log(show);
        //         UIModule.makeOneMovie(show);
    
        //     })
