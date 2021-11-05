const Commando = require('discord.js-commando')

module.exports = class Franke extends Commando.Command{
    constructor(client) {
        super(client, {
            name:"franke",
            group:"fun",
            memberName:"franke",
            description:"Franke is our teacher lol",
            argsType:"single"
        })
    }

    async run(message, args) {
        await message.channel.send("Sooooooo, dazu habe ich eine Präsentation vorbereitet, bitte schlagen sie im skript dazu nach!")
        await message.delete();
    }
}