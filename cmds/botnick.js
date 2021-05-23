const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission('MANAGE_NICKNAMES')) {
        return message.reply('Tu n\'as pas la permission de changer le nom du bot');
    } else {
        let username = args.join(' ');
        if (username.length < 1) return message.reply('Tu dois spécifier un nom pour le bot.')
        message.guild.members.cache.get('842027910801129512').setNickname(username);
        const embed = new Discord.MessageEmbed()
        .setColor('#C88EC1')
        .addField('Nom du bot changé avec succès !', username + " est maintenant le nom du bot :white_check_mark:");
        message.reply({embed})
    }
}

module.exports.config = {
    name: 'botnick'
}