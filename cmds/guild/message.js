const Commnando = require("discord.js-commando")

module.exports = (Discord, client, message) => {
    const prefix = require('./config.json')
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ ./);
    const cmd = args.shift().toLowerCase();

    const command = client.commmands.get(cmd)
}