const Discord = require('discord.js');
const moment = require('moment');
const regions = {
    brazil: 'Brazil',
    europe: 'Europe',
    hongkong: 'Hong Kong',
    india: 'India',
    japan: 'Japan',
    russia: 'Russia',
    singapore: 'Singapore',
    southafrica: 'South Africa',
    sydeny: 'Sydeny',
    'us-central': 'US Central',
    'us-east': 'US East',
    'us-west': 'US West',
    'us-south': 'US South'
};

module.exports.run = async(bot, message, args) => {
    const roles = message.guild.roles.cache.sort((a, b) => b.position - a.position).map(role => role.toString());
    const members = message.guild.members.cache;
    const channels = message.guild.channels.cache;
    const emojis = message.guild.emojis.cache;

    const embed = new Discord.MessageEmbed()
        .setTitle(`**📋 ServerInfo 📋**`)
        .setColor('#C88EC1')
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .addField('Général:', [
            `**❯ Name:** ${message.guild.name}`,
            `**❯ ID:** ${message.guild.id}`,
            `**❯ Owner:** ${message.guild.owner.user.tag} (${message.guild.ownerID})`,
            `**❯ Region:** ${regions[message.guild.region]}`,
            `**❯ Boost:** ${message.guild.premiumTier ? `Tier ${message.guild.premiumTier}` : 'None'}`,
            `**❯ Création:** ${moment(message.guild.createdTimestamp).format('LT')} ${moment(message.guild.createdTimestamp).format('LL')} [${moment(message.guild.createdTimestamp).fromNow()}]`,
            '\u200b'
        ])
        .addField('Statistiques:', [
            `**Role Count:** ${roles.length}`,
            `**Emoji Count:** ${emojis.size}`,
            `**Regular Emoji Count:** ${emojis.filter(emoji => !emoji.animated).size}`,
            `**Animated Emoji Count:** ${emojis.filter(emoji => emoji.animated).size}`,
            `**Member Count:** ${message.guild.memberCount}`,
            `**Humans:** ${members.filter(member => !member.user.bot).size}`,
            `**Bots:** ${members.filter(member => member.user.bot).size}`,
            `**Text Channels:** ${channels.filter(channel => channel.type === 'text').size}`,
            `**Voice Channels:** ${channels.filter(channel => channel.type === 'voice').size}`,
            `**Boost Count:** ${message.guild.premiumSubscriptionCount || '0'}`,
            '\u200b'
        ])

        .addField(`Roles [${roles.length - 1}]`, roles.join(', '))

        .setFooter(message.member.displayName,  bot.user.displayAvatarURL({ dynamic: true }))
        .setImage('https://64.media.tumblr.com/a2f170bab61977c24ba7dafb0cedbb14/b8a1488922369ffc-4a/s500x750/68f3d64d290f25b78d5ef8719d77ee57684d643a.gif')
        .setTimestamp();
    message.channel.send(embed);
}

module.exports.config = {
  name: 'serverinfo'
}