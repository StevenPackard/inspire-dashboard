import store from "../store.js";
import heroService from "../services/hero-service.js";

// Draw Hero image to pin
function _drawImg() {
  let hero = store.State.heroes[Math.floor(Math.random() * store.State.heroes.length)];
  let heroImg = hero.imgURL
  // document.getElementById("heroImg").style.backgroundImage = `url('${heroImg}')`
}


export default class HeroController {
  constructor() {
    store.subscribe('heroes', _drawImg)
  }

  // get image from Marvel api
  getImg() {
    heroService.getImg()
  }

  // Add/remove spin on pin
  spin() {
    let hero = document.getElementById("hero")
    if (hero.classList.contains("fa-spin")) {
      hero.classList.remove("fa-spin")
    } else {
      hero.classList.add("fa-spin")
    }
  }
}