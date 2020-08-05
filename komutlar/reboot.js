const Discord = require('discord.js');

exports.run = (client, message, args) => {
	var owners = ["404935478911959061"];

	if (!owners.includes(message.author.id)) return message.reply('Bu komudu kullanmaya yetkiniz yetmiyor.');

	message.channel.send(`Aktif, Komutlar yükleniyor, oyun ismi ayarlanıyor...`)
	message.channel.send(`${client.user.username} ismi ile giriş yapıldı!`)
	message.channel.send(`Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`)
    message.channel.send(`Bot yeniden başlatıldı! Savel BOT:copyright:`).then(msg => {
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
  description: 'Botu yeniden başlatır. -Yetkili Komudu',
  usage: 'reboot'
};
