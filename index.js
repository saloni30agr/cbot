'use strict';
const http = require('http')
const Bot = require('messenger-bot')

let bot = new Bot({
  token: 'EAABZCh7NcTWkBAGEc58zjvwhGqdZA4ImvqAkN8tKkgZBRRwnZCA7QSEbELVe1HhV2ELeCthDz67D3oSJQZBPTLUr0yIJDPAcS3odO3Vvyc1lBYfzFx5s687ceDowIp2MIkE1SQN9QQuuKZBT4fZAxhLk65h4vVZBOrJDt84FMrv7AAZDZD',
  verify: 'VERIFY_TOKEN'
})

bot.on('error', (err) => {
  console.log(err.message)
})

bot.on('message', (payload, reply) => {
  let text = payload.message.text

  bot.getProfile(payload.sender.id, (err, profile) => {
    if (err) throw err

    reply({ text }, (err) => {
      if (err) throw err

      console.log(`Echoed back to ${profile.first_name} ${profile.last_name}: ${text}`)
    })
  })
})

http.createServer(bot.middleware()).listen(3000)
console.log('Echo bot server running at port 3000.')
