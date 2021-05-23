const figlet = require('figlet');

module.exports.run = async(bot, message, args) => {
    if(!args[0]) return message.channel.send('Merci d\'écrire un texte.');

    msg = args.join(" ");

    figlet.text(msg, function (err, data){
        if(err){
            console.log('Quelque-chose ne va pas !');
            console.dir(err);
        }
        if(data.length > 2000) return message.channel.send('Merci de mentionner un texte de moins de 2000 caractères.')

        message.channel.send('```' + data + '```')
    })
}

module.exports.config = {
    name: "ascii"
}