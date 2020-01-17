const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: /başvuru <açıklama>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Başvurunuz bildirildi !!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının başvurusu:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Başvuru", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('496382297721798661').send(embed2); // Kanal ID

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'başvuru',
  description: 'Ekip için başvuru.',
  usage: 'başvuru <açıklama>'
};