export default class Quote {
  constructor(data) {
    this.author = data.author
    this.quote = data.body
    this.id = data.id
  }


  get Template() {
    return `
    <div class="quote-box overflow-content tall-stuff">
    <h3 class="overflow-content text-box"><b>"${this.quote}"</b></h3>
    <h5 class="quote-hide">- ${this.author}</h5>
    </div>
    `
  }
}