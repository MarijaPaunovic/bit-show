
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
        console.log('DATA', 'fetchShows');

        const showsRequestUrl = 'http://api.tvmaze.com/shows';

        $.get(showsRequestUrl, function (showsArray) {
            console.log("DATA", "GET request finished", showsArray);

            const myShows = showsArray.slice(0, 51).map((show) => {
                const { id, name, image, rating } = show;
                return new Show(id, name, image.medium, rating.average)
            });
            console.log(myShows);
            onSuccess(myShows);

        }).fail(function () {
            console.log("Error.")
        })

    }

    return {
        fetchShows
    }

})();