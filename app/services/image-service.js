import store from "../store.js";

// @ts-ignore
const imgApi = axios.create({
  baseURL: "//bcw-sandbox.herokuapp.com/api/images",
  timeout: 8000
});


class ImageService {
  constructor() {
    this.getImg();
  }

  // Get image from sandbox and commit to store
  async getImg() {
    let res = await imgApi.get('');
    store.commit('image', res.data)
  }
}

const imageService = new ImageService();
export default imageService;
