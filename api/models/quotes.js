let quotes = require('../data/quotes.json')
const helper = require("../helpers")

function getQuotes() {
  return new Promise((resolve, reject) => {
      if (quotes.length === 0) {
          reject({
              message: 'no quotes available',
              status: 202
          })
      }

      resolve(quotes)
  })
}

function getQuote(author) {
  return new Promise((resolve, reject) => {
      helper.mustBeInArray(quotes, author)
      .then(quote => resolve(quote))
      .catch(err => reject(err))
  })
}

module.exports = {
  getQuotes,
  getQuote
};
