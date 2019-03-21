
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


