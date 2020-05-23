import store from "../store.js";
import Hero from "../models/hero.js"

// @ts-ignore
const heroApi = axios.create({
  baseURL: "https://gateway.marvel.com:443/v1/public/characters?apikey=2148bbf76c5acd7c1b486d33517c8d71&limit=100",
  timeout: 8000
});

//TODO create methods to retrieve data trigger the update window when it is complete
class HeroService {
  constructor() {
    this.getImg();
  }

  async getImg() {
    let res = await heroApi.get('');
    let heroes = res.data.data.results.map(h => new Hero(h)).filter(h => h.imgURL != "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg")
    store.commit('heroes', heroes)
  }


}

const heroService = new HeroService();
export default heroService;
