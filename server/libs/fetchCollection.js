const request = require('request-promise')
const cheerio = require('cheerio')

module.exports = (collectionId) => request({
    uri: `https://gyazo.com/collections/${collectionId}.atom`,
    transform: (body) => cheerio.load(body, {
      xmlMode: true
    })
  })
    .then(($) => $('entry'))
