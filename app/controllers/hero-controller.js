import store from "../store.js";
import heroService from "../services/hero-service.js";

function _drawImg() {
  let hero = store.State.heroes[Math.floor(Math.random() * store.State.heroes.length)];
  let heroImg = hero.imgURL
  document.getElementById("heroImg").style.backgroundImage = `url('${heroImg}')`
}


export default class HeroController {
  constructor() {
    store.subscribe('heroes', _drawImg)
  }

  getImg() {
    heroService.getImg()
  }

  spin() {
    let hero = document.getElementById("hero")
    if (hero.classList.contains("fa-spin")) {
      hero.classList.remove("fa-spin")
    } else {
      hero.classList.add("fa-spin")
    }
  }
}