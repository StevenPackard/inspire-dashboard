import WeatherService from "../services/weather-service.js";
import store from "../store.js";

//NOTE The weather service and controller are mostly done,
//		you may wish to check out the model and include some additional data.

//TODO Complete rendering data to the screen
function _drawWeather() {
  console.log("THE WEATHER MAN SAYS:", store.State.weather);
  let weather = store.State.weather
  let template = ''
  if (weather) {
    template += weather.Template
  }
  document.getElementById("weather").innerHTML = template
}

function _drawTime() {
  let today = new Date();
  let h = today.getHours();
  let m = (today.getMinutes() < 10 ? '0' : '') + today.getMinutes();
  let mIndex = (today.getMonth() + 1)
  let month = ''
  let day = today.getDate()
  let year = today.getFullYear()
  //#region check month
  if (mIndex == 1) {
    month = "January"
  }
  if (mIndex == 2) {
    month = "February"
  }
  if (mIndex == 3) {
    month = "JMarch"
  }
  if (mIndex == 4) {
    month = "April"
  }
  if (mIndex == 5) {
    month = "May"
  }
  if (mIndex == 6) {
    month = "June"
  }
  if (mIndex == 7) {
    month = "July"
  }
  if (mIndex == 8) {
    month = "August"
  }
  if (mIndex == 9) {
    month = "September"
  }
  if (mIndex == 10) {
    month = "October"
  }
  if (mIndex == 11) {
    month = "November"
  }
  if (mIndex == 12) {
    month = "December"
  }
  //#endregion
  document.getElementById("time").innerText = `${h}:${m}`
  document.getElementById("date").innerText = `${month} ${day}, ${year}`

}
export default class WeatherController {
  constructor() {
    store.subscribe("weather", _drawWeather);
    WeatherService.getWeather();
    setInterval(_drawTime, 1000)
  }

  switchTempC() {
    let tempC = store.State.weather.Template2
    document.getElementById("weather").innerHTML = tempC
  }
  switchTempF() {
    let tempF = store.State.weather.Template
    document.getElementById("weather").innerHTML = tempF
  }


}
