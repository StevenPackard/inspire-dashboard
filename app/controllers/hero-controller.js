import store from "../store.js";
import heroService from "../services/hero-service.js";

function _drawImg() {
  let hero = store.State.heroes[Math.floor(Math.random() * store.State.heroes.length)];
  let heroImg = hero.imgURL
  console.log(heroImg);
  document.getElementById("heroImg").style.backgroundImage = `url('${heroImg}')`
}


export default class HeroController {
  constructor() {
    store.subscribe('heroes', _drawImg)
  }

  getImg() {
    heroService.getImg()
  }
}