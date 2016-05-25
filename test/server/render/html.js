const test = require('ava')
const Koa = require('../../helpers/koaMock')
const renderHTML = require('../../../server/render/html')

test('ok', function *(t) {
  t.plan(1)
  const koa = new Koa()
  renderHTML.apply(koa)
  const gyazoUrl = 'https://example.com/0123456789abcdef0123456789abcdef.png'
  t.is(koa.body, `
    <link href="https://api.gyazo.com/api/oembed?url=${gyazoUrl}" rel="alternate" type="application/json+oembed" />
    <a href='${gyazoUrl}'><img src='${gyazoUrl}/r'></a>
  `)
})
