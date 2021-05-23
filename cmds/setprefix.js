const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send('Vous n\'avez pas la permission d\'utiliser cette commande.');

    if(!args[0]) return message.channel.send('Merci de mentionner un nouveau préfix.');

    if(args[1]) return message.channel.send('Le prefix ne peut pas avoir 2 caractères.');

    db.set(`prefix_${message.guild.id}`, args[0])

    message.channel.send(`Mis avec succès le nouveau préfix est : **${args[0]}**`)
}

module.exports.config = {
    name: 'setprefix'
}