const Discord = require('discord.js');
exports.run = function(client, message, args) {
	var owners = ["404935478911959061","336557258148151309"];
	if (!owners.includes(message.author.id)) return message.reply('Bu komudu kullanmaya yetkiniz yetmiyor.');
  message.reply('Pong! **' + client.ping + '** ms');
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Botun pingini gösterir.',
  usage: 'ping'
};
