'use strict'
module.exports = class {
  constructor () {
    this.body = ''
    this.gyazoUrls = {
      imageUrl: 'https://example.com/0123456789abcdef0123456789abcdef.png',
      thumbUrl: 'https://example.com/thumb/200/0123456789abcdef0123456789abcdef.png'
    }
  }
  request (body) {
    this.request.body = body
  }
}
