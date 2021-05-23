const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let target = message.mentions.members.first()
        var hug = [
          "https://media.giphy.com/media/du8yT5dStTeMg/giphy.gif",
          "https://media.giphy.com/media/IRUb7GTCaPU8E/giphy.gif",
          "https://media.giphy.com/media/qscdhWs5o3yb6/giphy.gif",
          "https://media.giphy.com/media/svXXBgduBsJ1u/giphy.gif",
          "https://media.giphy.com/media/lrr9rHuoJOE0w/giphy.gif",
          "https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif",
          "https://media.giphy.com/media/sUIZWMnfd4Mb6/giphy.gif",
          "https://media.giphy.com/media/ZQN9jsRWp1M76/giphy.gif",
          "https://media.giphy.com/media/HaC1WdpkL3W00/giphy.gif",
          "https://media.giphy.com/media/kvKFM3UWg2P04/giphy.gif",
          "https://media.giphy.com/media/VGACXbkf0AeGs/giphy.gif",

         ];
        var gif = hug[Math.floor(Math.random() * hug.length)];
        const embed = new Discord.MessageEmbed()
            .setColor('#2f3136')
            .setTitle(`${message.author.username} vient de faire un câlin a ${target.user.username}`) 
            .setImage(gif)
            .setTimestamp()
            .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed);
    
    }

module.exports.config = {
    name: 'hug'
}
