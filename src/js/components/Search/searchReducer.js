
const defaultState = {
    cWeather: {
        name: "City",
        lat: 0,
        lon: 0,
        temperature: 0,
        pressure: 0,
        humidity: 0,
        lowTemp: 0,
        highTemp: 0,
        windSpeed: 0,
        description:"",
        icon:"https://openweathermap.org/img/w/old.png",
        list:[]
    },
    sHistory: []
};

export default function searchReducer(state = defaultState, action) {
    const { type, payload } = action;

    switch (type) {
        case "THE_WEATHER_FULFILLED": {
            return {
                ...state,
                cWeather: payload
            };
        }

        case "THE_WEATHER_REJECTED": {
            return {
                ...state,
                error: true
            };
        }

        case "UPDATE_SEARCH_HISTORY": {
            return {
                ...state,
                sHistory: [...state.sHistory, payload]
            };
        }

        default: {
            return state;
        }
    }
}















//         case "ADD_CITY":{
//             return{
//                 ...state,
//                 cityName:"",
//                 cList:[payload,...state.cList]
//             };
//         }
//         case "ADD_BUTTON": {
//             return{
//                 ...state,
//                 cityName:"",
//                 cButton: [payload,...state.cButton]
//             };         
//         }

//         case "UPDATE_SEARCH": {
//             return{
//                 ...state,
//                 cityName:payload.name
//             };         
//         }

//         case "UPDATE_WEATHER": {
//             return{
//                 ...state,
//                 cityWeather:payload
//             };         
//         }


//         default:{
//             return state;
//         }
//     }
// }