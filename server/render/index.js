const renderHtml = require('./html')
const renderText = require('./text')

module.exports = function *(next) {
  this.gyazoUrl = this.gyazoUrls.imageUrl
  switch (this.extension) {
    case 'html':
      renderHtml.apply(this)
      break
    default:
      renderText.apply(this)
  }
}
