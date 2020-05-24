export default class Weather {
  constructor(data) {
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
				<h5><b>${this.city}</b></h5>
    `
  }
}