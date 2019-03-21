
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

        const showsRequestUrl = 'http://api.tvmaze.com/shows';


        $.get(showsRequestUrl, function (responseFromApi) {

            const myShows = responseFromApi.slice(0, 51).map((show) => {
                const { id, name, image, rating } = show;
                return new Show(id, name, image.medium, rating.average)
            });

            onSuccess(myShows);

        })

        // function getShowInfo () {

        // }


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



