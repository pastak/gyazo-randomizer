module.exports = function () {
  this.body = `
    <link href="https://api.gyazo.com/api/oembed?url=${this.gyazoUrl}" rel="alternate" type="application/json+oembed" />
    <a href='${this.gyazoUrl}'><img src='${this.gyazoUrl}/r'></a>
  `
}
