# Gyazo Collection Randomizer

[![Build Status](https://travis-ci.org/pastak/gyazo-randomizer.svg?branch=master)](https://travis-ci.org/pastak/gyazo-randomizer)

This is easy way to get image Url which is selected as random from [Gyazo Collection](https://support.gyazo.com/hc//articles/206458915-How-can-I-use-Gyazo-to-collect-and-share-multiple-images-at-once-).

## Usage

If your collection URL is `https://gyazo.com/collections/51abd733329db8f65a26e040f70ffda3`,  
`:collectionId` is `51abd733329db8f65a26e040f70ffda3`

### Basic Usage

*   Get Url Text: `https://gyazo-randomizer.herokuapp.com/random/:collectionId`
    *   Sample: [https://gyazo-randomizer.herokuapp.com/random/51abd733329db8f65a26e040f70ffda3](https://gyazo-randomizer.herokuapp.com/random/51abd733329db8f65a26e040f70ffda3)
*   View Html includes image: `https://gyazo-randomizer.herokuapp.com/random/:collectionId.html`
    *   Sample: [https://gyazo-randomizer.herokuapp.com/random/51abd733329db8f65a26e040f70ffda3.html](https://gyazo-randomizer.herokuapp.com/random/51abd733329db8f65a26e040f70ffda3.html)

### with Slack Webhook

#### Setting Outcomming Webhook

1.  Open [your team's Outgoing Webhook Settings](https://my.slack.com/services/new/outgoing-webhook).
2.  **MUST** set <mark>trigger_word(s)</mark>.
3.  **Recommend** to set <mark>channel(s)</mark>.
4.  Set URL: `https://gyazo-randomizer.herokuapp.com/webhooks/slack/:collectionId`

#### Use on Slack

*   You say `<trigger_word>`, webhook returns gyazo URL  
    [![https://gyazo.com/efdf858044dd149611fcc53dc3d2c49f](https://i.gyazo.com/efdf858044dd149611fcc53dc3d2c49f.png)](https://gyazo.com/efdf858044dd149611fcc53dc3d2c49f)
*   You say `<trigger_word> html`, webhook returns html  
    [![https://gyazo.com/11ad6c7070dc8d7426d6f9d707cb11e7](https://i.gyazo.com/11ad6c7070dc8d7426d6f9d707cb11e7.png)](https://gyazo.com/11ad6c7070dc8d7426d6f9d707cb11e7)
*   You say `<trigger_word> md|markdown`, webhook returns markdown  
    [![https://gyazo.com/ccfabfd135da6c7e766e719b01cf4cd9](https://i.gyazo.com/ccfabfd135da6c7e766e719b01cf4cd9.png)](https://gyazo.com/ccfabfd135da6c7e766e719b01cf4cd9)
