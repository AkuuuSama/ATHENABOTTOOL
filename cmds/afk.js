const Discord = require('discord.js');
const ms = require('ms');
const moment = require('moment');
require("moment-duration-format");

module.exports.run = async(bot, message, args) => {
    let raison = args.slice(1).join(" ")
    let user = message.author
    let botmessage = `${user} **est maintenant AFK !**`
    let embed = new Discord.MessageEmbed()
    .setColor("#C88EC1")
    .setDescription(raison)
    message.channel.send({embed: embed});
    message.channel.send(botmessage);
    message.delete().catch();

    setTimeout(() =>{
        let botmessage = `${user} **n'est plus AFK !**`
        message.channel.send(botmessage);
    },ms(time))

    console.log(`Commande ${message.author.lastMessage} executé sur le serveur ${message.guild.name} dans le salon ${message.channel.name} par le membre ${message.author.username} le ${message.createdAt}`)
}

module.exports.config = {
    name: 'afk'
}