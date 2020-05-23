export default class Weather {
  constructor(data) {
    console.log('[RAW WEATHER API DATA]', data);
    //NOTE Have you ever wanted to know the temperature measured in kelvin? 
    //      That is what this data returns! data.main.temp is the temperature in Kelvin


    //TODO You should probably convert the temperature data to either F or C
    //      check out the other data that comes back and see if there is anything you want to try

    this.city = data.name
    this.kelvin = data.main.temp
    this.tempF = (Math.round(data.main.temp * 9 / 5 - 459.67))
    this.tempC = (Math.round(data.main.temp - 273.15))
  }



  get Template() {
    return `
    <h4 onclick="app.weatherController.switchTempC()"><i class="fas fa-cloud"></i><b> ${this.tempF}</b>°</h4>
				<h5><b>${this.city}</b></h5>
    `
  }

  get Template2() {
    return `
    <h4 onclick="app.weatherController.switchTempF()"><i class="fas fa-cloud"></i><b> ${this.tempC}</b>°</h4>
				<h5><b>${this.city}<b></h5>
    `
  }
}