
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


