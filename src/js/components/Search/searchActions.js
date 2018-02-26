import axios from "axios";

export function theWeather(place) {

  return {
    type: "THE_WEATHER",
    payload:
      axios
        .get(`/weather/${place}`)
        .then(res => {
          console.log(res.data)
          const cWeather = {
            name: res.data.city.name,
            lat:res.data.city.coord.lat,
            lon:res.data.city.coord.lon,
            temperature:res.data.list[0].main.temp,
            pressure:res.data.list[0].main.pressure,
            humidity:res.data.list[0].main.humidity,
            lowTemp:res.data.list[0].main.temp_min,
            highTemp:res.data.list[0].main.temp_max,
            windSpeed:res.data.list[0].wind.speed,
            icon:res.data.list[0].weather[0].icon,
            list: res.data.list
          }
          console.log("GG", cWeather)
          return cWeather;
        })

  }
}

export function updateSearch(place, day, t) {
  return {
    type: "UPDATE_SEARCH_HISTORY",
    payload: {
      city: place,
      date: day,
      time: t
    }
  }
}
