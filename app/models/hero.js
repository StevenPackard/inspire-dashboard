export default class Hero {
  constructor(data) {
    this.imgURL = data.thumbnail.path + "." + data.thumbnail.extension
    this.name = data.name
  }


  get Template() {
    return `
    
    `
  }
}