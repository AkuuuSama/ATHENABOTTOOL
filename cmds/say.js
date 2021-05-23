const Discord = require('discord.js');

module.exports.run = async (bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Tu n'as pas la permission d'exécuter cette commande !");
    let botmessage = args.join(" ");
    message.delete().catch();
    message.channel.send(botmessage);
}

module.exports.config = {
    name: 'say'
}