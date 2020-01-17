const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: /tavsiye <Tavsiyeniz>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Tavsiyeniz Bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının tavsiyesi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Tavsiye", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('495648848702865409').send(embed2); // Kanal ID

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'tavsiye',
  description: 'Bot için tavsiye bildirirsiniz',
  usage: 'tavsiye <tavsiyeniz>'
};