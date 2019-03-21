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

    // const initSinglePage = () => {
    //     const id = localStorage.getItem('data-post-id');
    //     const singlePageURL = `http://api.tvmaze.com/shows/${id}?embed[]=episodes&embed[]=cast`;

    //     $.get(singlePageURL, function (response) {
    //         const singleShow = data.createSingleShow(response);
    //         ui.displaySingleShow(singleShow);
    //     });
    // };



    return {
        init
    }

})(dataModule, uiModule)
