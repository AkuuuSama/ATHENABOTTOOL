const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
  const answers = [
    'Essaye plus tard.',
    'Essaye encore.',
    'Pas envie.',
    'C\'est ton destin.',
    'Le sort en est jeté !',
    'Une chance sur deux.',
    'Repose ta question...',
    'D\'après moi oui. ',
    'C\'est certain.',
    'Oui, absolument.',
    'Tu peux compter dessus.',
    'Sans aucun doute.',
    'Très probable.',
    'Oui.',
    'C\'est bien parti !',
    'C\'est non.',
    'Peu probable.',
    'Faut pas rêver !',
    'N\'y compte pas.',
    'Impossible.'
  ];

    const question = args.join(' ');
    if (!question) return this.sendErrorMessage(message, 0, 'Merci de poser une question.');
    const embed = new Discord.MessageEmbed()
      .setTitle(':8ball: 8-Ball :8ball:')
      .addField('Question :', question)
      .addField('Réponse :', `${answers[Math.floor(Math.random() * answers.length)]}`)
      .setColor('#C88EC1')
      .setImage('https://31.media.tumblr.com/f72f96b8cb7355fda78e8698a016d5b9/tumblr_n12wdgcMwu1s5p7cto10_500.gif')
      .setFooter(message.member.displayName,  bot.user.displayAvatarURL({ dynamic: true }))
      .setTimestamp()
      message.channel.send(embed);
   
}
    
module.exports.config = {
    name: "8ball"
}