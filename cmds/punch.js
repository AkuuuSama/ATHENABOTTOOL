const Discord = require('discord.js')

module.exports.run = async(bot, message, args) => {
    let target = message.mentions.members.first()
        var punch = [
          "https://media1.tenor.com/images/31686440e805309d34e94219e4bedac1/tenor.gif?itemid=4790446",
          "https://i.pinimg.com/originals/15/2b/af/152baf4303ec9bf40f33c54b01e3f3fc.gif",
          "https://i.pinimg.com/originals/8a/ab/09/8aab09880ff9226b1c73ee4c2ddec883.gif",
          "https://i.pinimg.com/originals/d7/c3/0e/d7c30e46a937aaade4d7bc20eb09339b.gif",
          "https://i.imgur.com/g91XPGA.gif",
          "https://i1.wp.com/nileease.com/wp-content/uploads/2020/11/812c384875e4b52dbd7c34d6d8480fb7.gif?fit=498%2C280&ssl=1",
          "https://i.imgur.com/f2kkp3L.gif?noredirect",
          "https://media3.giphy.com/media/DuVRadBbaX6A8/giphy.gif",
          "https://media3.giphy.com/media/Z5zuypybI5dYc/giphy.gif",
          "https://i.gifer.com/9eUJ.gif",
          "https://i.kym-cdn.com/photos/images/newsfeed/001/856/131/1af.gif",
          "https://j.gifs.com/W7nz1g@large.gif?download=true",
          "https://i.kym-cdn.com/photos/images/newsfeed/001/117/646/bf9.gif",

         ];
        var gif = punch[Math.floor(Math.random() * punch.length)];
        const embed = new Discord.MessageEmbed()
            .setColor('#2f3136')
            .setTitle(`${message.author.username} vient de donner un coup de poing a ${target.user.username}`) 
            .setImage(gif)
            .setTimestamp()
            .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))
        message.channel.send(embed)
}

module.exports.config = {
    name: 'punch'
}