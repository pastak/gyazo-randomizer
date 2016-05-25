const test = require('ava')
const Koa = require('../../helpers/koaMock')
const renderText = require('../../../server/render/text')

test('ok', function *(t) {
  t.plan(1)
  const koa = new Koa()
  renderText.apply(koa)
  t.is(koa.body, 'https://example.com/0123456789abcdef0123456789abcdef.png')
})
