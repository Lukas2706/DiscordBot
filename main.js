const path = require('path')
const commando = require('discord.js-commando')

const config = require('./config.json')
const prefix = require('./config.json')

const client = new commando.CommandoClient ({
    owner: '301299973767823360',
    commandPrefix: config.prefix
})

client.on('ready', async () => {
    console.log('Bot is ready')

   client.registry
        .registerGroups([
            ['administration', 'Admin Commands'],
            ['fun', 'Funny useless Commands'],
            ['generals', 'basic server commands'],
            ['images', 'tbh idk what this is'],
            ['moderation', 'moderation commands'],
            ['music', 'music player commands'],
            ['owner', 'owner commands'],
            ['guild', 'guild Commands']
        ])
        .registerDefaults()
        .registerCommandsIn(path.join(__dirname, 'cmds'))
    

})

client.login(config.token)