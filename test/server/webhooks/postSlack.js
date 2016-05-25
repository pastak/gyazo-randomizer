const test = require('ava')
const Koa = require('../../helpers/koaMock')
const postSlack = require('../../../server/webhooks/postSlack')

test('`<trigger_word>`', function *(t) {
  t.plan(1)
  const koa = new Koa()
  koa.request(require('../../fixtures/slack.json'))
  yield postSlack.bind(koa, function * () {})
  t.deepEqual(koa.body ,{
    attachments: [
      {
        pretext: "",
        text: "https://example.com/0123456789abcdef0123456789abcdef.png",
        thumb_url: "https://example.com/thumb/200/0123456789abcdef0123456789abcdef.png",
        mrkdwn_in: ["pretext"]
      }
    ]
  })
})

test('`<trigger_word> html`', function *(t) {
  t.plan(1)
  const koa = new Koa()
  const req = require('../../fixtures/slack.json')
  req.text = 'lgtm html'
  koa.request(req)
  yield postSlack.bind(koa, function * () {})
  t.deepEqual(koa.body ,{
    attachments: [
      {
        pretext: "`<a href='https://example.com/0123456789abcdef0123456789abcdef.png' target='_blank'><img src='https://example.com/0123456789abcdef0123456789abcdef.png/r' /></a>`",
        text: "https://example.com/0123456789abcdef0123456789abcdef.png",
        thumb_url: "https://example.com/thumb/200/0123456789abcdef0123456789abcdef.png",
        mrkdwn_in: ["pretext"]
      }
    ]
  })
})

test('`<trigger_word> md|markdown`', function *(t) {
  t.plan(2)

  const correct = {
    attachments: [
      {
        pretext: "`[![https://example.com/0123456789abcdef0123456789abcdef.png](https://example.com/0123456789abcdef0123456789abcdef.png/r)](https://example.com/0123456789abcdef0123456789abcdef.png)`",
        text: "https://example.com/0123456789abcdef0123456789abcdef.png",
        thumb_url: "https://example.com/thumb/200/0123456789abcdef0123456789abcdef.png",
        mrkdwn_in: ["pretext"]
      }
    ]
  }

  const koa = new Koa()
  const req = require('../../fixtures/slack.json')
  req.text = 'lgtm markdown'
  koa.request(req)
  yield postSlack.bind(koa, function * () {})
  t.deepEqual(koa.body ,correct)

  req.text = 'lgtm md'
  koa.request(req)
  yield postSlack.bind(koa, function * () {})
  t.deepEqual(koa.body ,correct)
})

test('`<trigger_word> hoge`', function *(t) {
  t.plan(1)
  const koa = new Koa()
  const req = require('../../fixtures/slack.json')
  req.text = 'lgtm hoge'
  koa.request(req)
  yield postSlack.bind(koa, function * () {})
  t.deepEqual(koa.body ,{
    attachments: [
      {
        pretext: "",
        text: "https://example.com/0123456789abcdef0123456789abcdef.png",
        thumb_url: "https://example.com/thumb/200/0123456789abcdef0123456789abcdef.png",
        mrkdwn_in: ["pretext"]
      }
    ]
  })
})
