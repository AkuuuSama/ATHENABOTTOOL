const Discord = require('discord.js');
const moment = require('moment');

const flags = {
	DISCORD_EMPLOYEE: 'Discord Employee',
	DISCORD_PARTNER: 'Discord Partner',
	BUGHUNTER_LEVEL_1: 'Bug Hunter (Level 1)',
	BUGHUNTER_LEVEL_2: 'Bug Hunter (Level 2)',
	HYPESQUAD_EVENTS: 'HypeSquad Events',
	HOUSE_BRAVERY: 'House of Bravery',
	HOUSE_BRILLIANCE: 'House of Brilliance',
	HOUSE_BALANCE: 'House of Balance',
	EARLY_SUPPORTER: 'Early Supporter',
	TEAM_USER: 'Team User',
	SYSTEM: 'System',
	VERIFIED_BOT: 'Verified Bot',
	VERIFIED_DEVELOPER: 'Verified Bot Developer'
};

module.exports.run = async(bot, message, args) => {
  const member = message.mentions.members.last() || message.guild.members.cache.get(new.target) || message.member;
  const roles = member.roles.cache
    .sort((a, b) => b.position - a.position)
    .map(role => role.toString())
    .slice(0, -1);
  const userFlags = member.user.flags.toArray();
  const embed = new Discord.MessageEmbed()
    .setTitle('🛡️ Informations du joueur 🛡️')
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true, size: 512 }))
    .setColor('#2f3136')
    .setImage("https://64.media.tumblr.com/c71e4f253e7319a35422e4f9a47d9c1c/tumblr_mjiy5wRw1r1qf1nmxo1_500.gif")
    .setTimestamp()
    .setFooter(message.member.displayName,  bot.user.displayAvatarURL({ dynamic: true }))
    .addField('User', [
      `**❯ Username:** ${member.user.username}`,
      `**❯ Tag:** ${member.user.discriminator}`,
      `**❯ ID:** ${member.id}`,
      `**❯ Flags:** ${userFlags.length ? userFlags.map(flag => flags[flag]).join(', ') : 'None'}`,
      `**❯ Avatar:** [Lien vers l'avatar](${member.user.displayAvatarURL({ dynamic: true })})`,
      `**❯ Compte crée le:** ${moment(member.user.createdTimestamp).format('LT')} ${moment(member.user.createdTimestamp).format('LL')} ${moment(member.user.createdTimestamp).fromNow()}`,
      `**❯ Status:** ${member.user.presence.status}`,
      `**❯ Game:** ${member.user.presence.game || 'Not playing a game.'}`,
      `\u200b`
    ])
    .addField('Member', [
      `**❯ Le rôle le plus haut:** ${member.roles.highest.id === message.guild.id ? 'None' : member.roles.highest.name}`,
      `**❯ A rejoint le serveur le:** ${moment(member.joinedAt).format('LL LTS')}`,
      `**❯ Roles [${roles.length}]:** ${roles.length < 10 ? roles.join(', ') : roles.length > 10 ? this.client.utils.trimArray(roles) : 'None'}`,
      `\u200b`
    ]);
  return message.channel.send(embed);
}


module.exports.config = {
  name: 'userinfo'
}