const test = require('ava')
const Koa = require('../../helpers/koaMock')
const renderMd = require('../../../server/render/markdown')

test('ok', function *(t) {
  t.plan(1)
  const koa = new Koa()
  renderMd.apply(koa)
  const gyazoUrl = 'https://example.com/0123456789abcdef0123456789abcdef.png'
  t.is(koa.body, `[![${gyazoUrl}](${gyazoUrl}/r)](${gyazoUrl})`)
})
