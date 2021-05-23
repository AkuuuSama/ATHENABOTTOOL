const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let target = message.mentions.members.first()
        var kiss = [
          "https://media.giphy.com/media/G3va31oEEnIkM/giphy.gif",
          "https://media.giphy.com/media/wOtkVwroA6yzK/giphy.gif",
          "https://media.giphy.com/media/JFmIDQodMScJW/giphy.gif",
          "https://media.giphy.com/media/hnNyVPIXgLdle/giphy.gif",
          "https://media.giphy.com/media/12VXIxKaIEarL2/giphy.gif",
          "https://media.giphy.com/media/zkppEMFvRX5FC/giphy.gif",
          "https://media.giphy.com/media/Ka2NAhphLdqXC/giphy.gif",
          "https://media.giphy.com/media/bGm9FuBCGg4SY/giphy.gif",
          "https://media.giphy.com/media/jR22gdcPiOLaE/giphy.gif",
          "https://media.giphy.com/media/FqBTvSNjNzeZG/giphy.gif",
          "https://media.giphy.com/media/QGc8RgRvMonFm/giphy.gif",
          "https://media.giphy.com/media/11rWoZNpAKw8w/giphy.gif",
          "https://media.giphy.com/media/nyGFcsP0kAobm/giphy.gif",

         ];
        var gif = kiss[Math.floor(Math.random() * kiss.length)];
        const embed = new Discord.MessageEmbed()
            .setColor('#2f3136')
            .setTitle(`${message.author.username} vient de faire un bisou a ${target.user.username}`) 
            .setImage(gif)
            .setTimestamp()
            .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
}

module.exports.config = {
    name: 'kiss'
}