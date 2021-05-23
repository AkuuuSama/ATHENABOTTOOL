const Discord = require('discord.js');
const db = require('quick.db');

module.exports.run = async(bot, message, args) => {
    let helpArray = message.content.split(" ");
    let helpArgs = helpArray.slice(1);

    //Custom Help command by using the second argument.
    if(helpArgs[0] === 'Gaming') {
        return message.reply("Ceci est la commande information")
    }

    

    //Normal usage of (prefix)help without any args. (Shows all of the commands and you should set the commands yourself)
    if(!helpArgs[0]) {
        var embed = new Discord.MessageEmbed()
            .setTitle(`Commandes:`)
            .setImage('https://64.media.tumblr.com/65016e493c702f73e5bb7dedce052a0a/54a9882b100fe390-08/s500x750/07b70cd053d32c5c734ffdae972d73146c06aeeb.gif')
            .setTimestamp()
            .setFooter(message.member.displayName,  bot.user.displayAvatarURL({ dynamic: true }))
            .addField('Member :', [
                `❯ 8ball`,
                `❯ avatar`,
                `❯ coinflip`,
                `❯ serverinfo`,
                `❯ userinfo`,
                `❯ ascii`,
                `❯ covid`,
                `❯ hug`,
                `❯ kiss`,
                `❯ punch`,
                `\u200b`
            ])

            .addField('Admin :', [
                `❯ setprefix`,
                `❯ say`,
                `❯ botnick`,
                `\u200b`
            ])

            .addField('Prefix :', [
                `\`\`\`${db.get(`prefix_${message.guild.id}`)}\`\`\``
            ])
            .setColor('#C88EC1')
            
        message.channel.send(embed);                    
    }

    //Reads the moudle.exports.config (This line of code is on commands folder, each command will read automaticly) by the second argument (the command name) and shows the information of it.
    if(helpArgs[0]) {
        let command = helpArgs[0];

        if(bot.commands.has(command)) {
            
            command = bot.commands.get(command);
            var embed = new Discord.MessageEmbed()
            .setAuthor(`${command.config.name} Command`)
            .setDescription(`
            - **Description de la commande:** __${command.config.description || "There is no Description for this command."}__
            - **Utilité de la commande:** __${command.config.usage || "No Usage"}__
            - **Permissions requises pour la commande:** __${command.config.accessableby || "Members"}__
            `)
            .setColor('#C88EC1')

        message.channel.send(embed);
    }}
}

module.exports.config = {
  name: 'help'
}