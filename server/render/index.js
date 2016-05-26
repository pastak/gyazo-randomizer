const renderHtml = require('./html')
const renderText = require('./text')
const renderMd = require('./markdown')

module.exports = function *(next) {
  switch (this.extension) {
    case 'html':
      renderHtml.apply(this)
      break
    case 'md':
      renderMd.apply(this)
      break
    default:
      renderText.apply(this)
  }
}
