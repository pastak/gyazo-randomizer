module.exports = function () {
  const gyazoUrl = this.gyazoUrls.imageUrl
  this.body = `
    <link href="https://api.gyazo.com/api/oembed?url=${gyazoUrl}" rel="alternate" type="application/json+oembed" />
    <a href='${gyazoUrl}'><img src='${gyazoUrl}/r'></a>
  `
}
