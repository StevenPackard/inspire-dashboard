import QuoteService from "../services/quote-service.js";
import store from "../store.js";
import quoteService from "../services/quote-service.js";

//Draw quote to the quote box 
function _drawQuote() {
  let quote = store.State.quote
  let template = ""
  if (quote) {
    template += store.State.quote.Template
  }
  document.getElementById("quote").innerHTML = template
}


export default class QuoteController {
  constructor() {
    store.subscribe("quote", _drawQuote)
    quoteService.getQuote();
  }

  // get quote from sandbox
  getQuote() {
    quoteService.getQuote()
  }
}
