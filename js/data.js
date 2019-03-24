import Show from './entities/Show.js';
import Season from './entities/Season.js';
import Person from './entities/Person.js';

const storage = {
    myShows: [],
    allShows: [],
}

const showsRequestUrl = 'http://api.tvmaze.com/shows';

const fetchData = (onSuccess) => {

    const request = $.ajax(showsRequestUrl);

    request.done((response) => {
        for (let i = 0; i < response.length; i++) {
            const element = response[i];

            const { id, name, image, rating, summary } = element;
            const show = new Show(id, name, image.medium, rating.average, summary);
            storage.allShows.push(show);
            
            // SORT BY RATING
            storage.allShows.sort(function (a, b) {
                return b.rating - a.rating;
            });
        };


        for (let i = 0; i < 51; i++) {
            storage.myShows.push(storage.allShows[i]);
        }

        onSuccess(storage.myShows);

    });
}

const getDataItem = (searchInput, onSearch) => {
    let searchedShows = [];
    const showsSearchUrl = `http://api.tvmaze.com/search/shows?q=${searchInput}`;
    
    const request = $.ajax(showsSearchUrl);
   
    request.done((response) => {

        for (let i = 0; i < response.length; i++) {
            const show = response[i].show;
            searchedShows.push(show);
        }

        onSearch(searchedShows);

    });
};

const getSingleShow = (id, onSingle) => {
    const showsSingleUrl = `http://api.tvmaze.com/shows/${id}`;
    
    const request = $.ajax(showsSingleUrl);
    
    request.done((response) => {

        const { id, name, image, rating, summary } = response;

        const single = new Show(id, name, image, rating.average, summary);

        onSingle(single);

    });
};

const getSeasons = (id, onSeason) => {
    const showsSeasonUrl = `http://api.tvmaze.com/shows/${id}/seasons`;
   
    const request = $.ajax(showsSeasonUrl);
   
    request.done((response) => {

        const { endDate, premiereDate } = response;

        let seasons = [];

        for (let i = 0; i < response.length; i++) {
            const { endDate, premiereDate } = response[i];
            const season = new Season(premiereDate, endDate);
            seasons.push(season);
        }

        onSeason(seasons);

    });
};

const getCast = (id, onCast) => {
    const showsCastUrl = `http://api.tvmaze.com/shows/${id}/cast`;
    
    const request = $.ajax(showsCastUrl);
   
    request.done((response) => {

        let casts = [];

        for (let i = 0; i < response.length; i++) {
            casts.push(new Person(response[i].person.name));
        }

        onCast(casts);

    });
};

export {
    fetchData,
    getDataItem,
    getSingleShow,
    getSeasons,
    getCast
}

