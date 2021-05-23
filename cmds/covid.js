const fetch = require('node-fetch');

const Discord = require('discord.js');

module.exports.run = async(bot, message, args) => {
    let countries = args.join(" ");
    let response = await fetch;

    const noArgs = new Discord.MessageEmbed()
    .setTitle('Manque d\'arguments')
    .setColor('#C88EC1')
    .setDescription('Vous n\'avez pas précisé un pays (ex: %covid all || %covid France')
    .setTimestamp()

    if(!args[0]) return message.channel.send(noArgs);
    if(args[0] === "all"){
        fetch(`https://covid19.mathdro.id/api`)
        .then(response = response.json())
        .then(data => {
            let confirmed = data.confirmed.value.toLocaleString()
            let recovered = data.recovered.value.toLocaleString()
            let death = data.deaths.value.toLocaleString()

            const embed = new Discord.MessageEmbed()
            .setTitle(`COVID-19 Stats 🌎 Dans le monde`)
            .addField('Cas confirmés :', confirmed)
            .addField('Réanimation :', recovered)
            .addField('Morts :', deaths)
            .setColor('#C88EC1')
            .setTimestamp()

            message.channel.send(embed)
        })
    } else {
        fetch(`https://covid19.mathdro.id/api/countries/${countries}`)
        .then(response => response.json())
        .then(data => {
            let confirmed = data.confirmed.value.toLocaleString()
            let recovered = data.recovered.value.toLocaleString()
            let deaths = data.deaths.value.toLocaleString()

            const embed = new Discord.MessageEmbed()
            .setTitle(`COVID-19 Stats **${countries}**`)
            .addField('Cas confirmés :', confirmed)
            .addField('Réanimation :', recovered)
            .addField('Morts :', deaths)
            .setColor('#C88EC1')
            .setTimestamp()

            message.channel.send(embed)
        }).catch(e => {
            return message.channel.send('Pays invalide.')
        })
    }
}

module.exports.config = {
    name: "covid"
}
