const Discord = require('discord.js');


exports.run = function(client, message, args) {
    let type = args.slice(0).join(' ');
    if (type.length < 1) return message.channel.send(
new Discord.RichEmbed()
.setDescription('Kullanım: +dcsoru <soru>'));
const embed = new Discord.RichEmbed()
.setColor('RANDOM')
.setDescription('Soru tavsiyeniz bildirildi!')
message.channel.send(embed)
const embed2 = new Discord.RichEmbed()
.setColor("RANDOM")
.setDescription(`**${message.author.tag}** adlı kullanıcının soru tavsiyesi:`)
.addField(`Kulanıcı Bilgileri`, `Kullanıcı ID: ${message.author.id}\nKullanıcı Adı: ${message.author.username}\nKullanıcı Tagı: ${message.author.discriminator}`)
.addField("Soru", type)
.setThumbnail(message.author.avatarURL)
client.channels.get('723613727198412881').send(embed2); // Kanal ID

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'dcsoru',
  description: 'Doğruluk cesaret sorusu için tavsiye.',
  usage: '+dcsoru <soru>'
};
