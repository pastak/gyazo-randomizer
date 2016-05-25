const renderHtml = require('./html')
const renderText = require('./text')

module.exports = function *(next) {
  switch (this.extension) {
    case 'html':
      renderHtml.apply(this)
      break
    default:
      renderText.apply(this)
  }
}
