const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
const user = message.mentions.users.first() || message.author;
    let avatar = user.displayAvatarURL({size: 4096, dynamic: true});
    const avatarEmbed = new Discord.MessageEmbed()
    .setAuthor(user.username)
    .setFooter(message.member.displayName,  bot.user.displayAvatarURL({ dynamic: true }))
    .setDescription(`Voici l'avatar de **${user.tag}**`)
    .setColor("#C88EC1")
    .setTimestamp()
    .setImage(avatar);
message.channel.send(avatarEmbed)
}

module.exports.config = {
    name: 'avatar'
}