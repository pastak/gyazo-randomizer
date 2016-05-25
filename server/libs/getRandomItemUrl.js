const fetchCollection = require('./fetchCollection')
const randomSelect = require('./randomSelect')
const gyazoItem = require('./gyazoItem')

module.exports = function *(next) {
  this.gyazoUrls = yield fetchCollection(this.collectionId)
    .then(randomSelect)
    .then(gyazoItem)
  yield next
}
