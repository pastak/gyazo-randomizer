module.exports = function *(next) {
  'use strict'
  const matches = this.request.body.text.match(`${this.request.body.trigger_word} (.+)$`)
  const type = (matches && matches[1]) || ''
  const imageUrl = this.gyazoUrls.imageUrl

  let text = ''
  switch (type.toLowerCase()) {
    case 'markdown':
    case 'md':
      text += '`' + `[![${imageUrl}](${imageUrl}/r)](${imageUrl})` + '`'
      break
    case 'html':
      text += '`' + `<a href='${imageUrl}' target='_blank'><img src='${imageUrl}/r' /></a>` + '`'
      break
  }

  this.body = {
    attachments: [
      {
        pretext: text,
        text: imageUrl,
        thumb_url: this.gyazoUrls.thumbUrl,
        mrkdwn_in:  ['pretext']
      }
    ]
  }
  yield next
}
