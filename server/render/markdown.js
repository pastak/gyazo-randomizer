module.exports = function () {
  const gyazoUrl = this.gyazoUrls.imageUrl
  this.body = `[![${gyazoUrl}](${gyazoUrl}/r)](${gyazoUrl})`
}
