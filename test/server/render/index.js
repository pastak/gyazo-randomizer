const test = require('ava')
const proxyquire = require('proxyquire')
const Koa = require('../../helpers/koaMock')

test('extension html', function *(t) {
  t.plan(1)
  const render = proxyquire('../../../server/render/index', {
    './html': () => t.pass()
  })
  const koa = new Koa()
  koa.extension = 'html'
  yield render.bind(koa, function * () {})
})

test('extension nothing returns text', function *(t) {
  t.plan(1)
  const render = proxyquire('../../../server/render/index', {
    './text': () => t.pass()
  })
  const koa = new Koa()
  koa.extension = null
  yield render.bind(koa, function * () {})
})

test('extension mp4 returns text', function *(t) {
  t.plan(1)
  const render = proxyquire('../../../server/render/index', {
    './text': () => t.pass()
  })
  const koa = new Koa()
  koa.extension = null
  yield render.bind(koa, function * () {})
})
