const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    const n = Math.floor(Math.random() * 2);
    let result;
    if (n === 1) result = 'face';
    else result = 'pile';
    const embed = new Discord.MessageEmbed()
    .setTitle('🧿 CoinFlip 🧿')
    .setDescription(`J'ai lancé la pièce pour toi ${message.member}. C'est tombé sur : **${result}**!`)
    .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
    .setImage('https://i.skyrock.net/9642/95359642/pics/3265683814_1_3_H0lp5gmb.gif')
    .setTimestamp()
    .setColor('#C88EC1');
    message.channel.send(embed);
}

module.exports.config = {
    name: 'coinflip'
}