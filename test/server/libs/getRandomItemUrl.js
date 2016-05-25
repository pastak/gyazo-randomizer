const test = require('ava')
const proxyquire = require('proxyquire')
const cheerio = require('cheerio')
const fs = require('fs')
const Koa = require('../../helpers/koaMock')

test('ok', function *(t) {
  const getRandomItemUrl = proxyquire('../../../server/libs/getRandomItemUrl', {
    './fetchCollection': () => new Promise((solve) => {
      const xmlBody = fs.readFileSync('../../fixtures/collection.xml')
      const $ = cheerio.load(xmlBody, {
        xmlMode: true
      })
      solve($('entry'))
    }),
    './randomSelect': (entries) => entries.eq(0)
  })
  const koa = new Koa()
  yield getRandomItemUrl.bind(koa, function * () {})
  t.deepEqual(koa.gyazoUrls, {
    imageUrl: 'https://gyazo.com/ca3aaba1801d8cba321e8c6267fd264e',
    thumbUrl: 'https://i.gyazo.com/thumb/100_crop/_a18597c858b0ad5e64b09d30d6466e6b-png.jpg'
  })
})
