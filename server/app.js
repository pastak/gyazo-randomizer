const Koa = require('koa')
const koaStatic = require('koa-static')
const koaBody   = require('koa-body')
const router = require('koa-router')()

const getRandomItemUrl = require('./libs/getRandomItemUrl')
const render = require('./render/index.js')
const postSlack = require('./webhooks/postSlack')

const app = new Koa()

router
  .param('collectionId', function *(id, next) {
    const matches = id.match(/^([a-f0-9]+)(:?\.(.+))?$/)
    if (!matches || !matches[1]) return this.status = 404
    this.collectionId = matches[1]
    this.extension = matches[3]
    yield next
  })
  .use(koaBody())
  .get('/random/:collectionId', getRandomItemUrl, render)
  .post('/webhooks/slack/:collectionId', getRandomItemUrl, postSlack)

app.use(koaStatic('static'))
app.use(router.routes())

const port = process.env.PORT || 3000
app.listen(port, function () {
  console.log(`listen on localhost:${port}`)
})
