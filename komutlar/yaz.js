const Discord = require('discord.js');

exports.run = (client, message, args) => {
  var owners = ["404935478911959061","336557258148151309"];
  if (!owners.includes(message.author.id)) return message.reply('Bu komudu kullanmaya yetkiniz yetmiyor.');
  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.reply('Yazmam için herhangi bir şey yazmalısın.');
  message.delete();
  message.channel.send(mesaj);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['say', 'söyle'],
  permLevel: 0
};

exports.help = {
  name: 'yaz',
  description: 'İstediğiniz şeyi bota yazdırır.',
  usage: 'yaz [yazdırmak istediğiniz şey]'
};