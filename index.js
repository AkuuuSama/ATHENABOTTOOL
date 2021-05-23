const Discord = require('discord.js')
const fs = require('fs')
const superagent = require('superagent')
const bot = new Discord.Client();
const db = require('quick.db');
const { default_prefix, token } = require("./config.json")
const colours = require("./colours.json");

bot.commands = new Discord.Collection();

bot.login(token);

fs.readdir('./cmds/', (err, files) => {
    if(err) console.log(err)
    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if(jsfile.length <= 0) {
      console.log()
    }
  
    jsfile.forEach((f, i) => {
      let props = require(`./cmds/${f}`);
      console.log(`${f} bon !`)
      bot.commands.set(props.config.name, props)
    })
  })

  bot.on("ready", async () => {
    console.log(" ");
    bot.user.setActivity("SETACTIVITY", {
        type:"STREAMING",
        url: "URL TWITCH"
    });
});

bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === 'dm') return;
    let prefix = await db.get(`prefix_${message.guild.id}`)
    if(prefix === null) prefix = default_prefix
    if (new RegExp(bot.user.id).test(message.content.trim().split(' ')[0])) return message.channel.send(`Coucou je suis **${bot.user.username}**, pour voir mes commandes faites \`${prefix}help\` !`)

    if (!message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    let commandFile = bot.commands.get(command.slice(command));
    if(commandFile) commandFile.run(bot, message, args)
})
