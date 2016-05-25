module.exports = (entry) => {return {
  imageUrl: entry.find('id').text(),
  thumbUrl: entry.find('media\\:thumbnail').attr('url')
}}
