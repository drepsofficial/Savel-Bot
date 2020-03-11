const Discord = require('discord.js');

exports.run = (client, message, args) => {
	var owners = ["439440128495058954","337326216568766464","404935478911959061"];

	if (!owners.includes(message.author.id)) return message.reply('Bu komudu kullanmaya yetkiniz yetmiyor.');

    message.channel.send(`Bot yeniden başlatılıyor...`).then(msg => {
    console.log(`BOT: Bot yeniden başlatılıyor...`);
    process.exit(0);
  })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 4
};

exports.help = {
  name: 'reboot',
  description: 'Botu yeniden başlatır.',
  usage: 'reboot'
};
