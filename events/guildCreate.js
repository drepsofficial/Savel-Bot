const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

const girismesaj = [
  '**Vodrolas BOT sunucunuza eklendi!**',
  '**Vodrolas BOT** sunucunuzdaki insanlara kolaylıklar sağlar.',
  'Bot dreps#0989 tarafından geliştirilmektedir.',
  'Botumuzun özelliklerini öğrenmek için ?help komutunu kullanabilirsin.',
  '',
]

client.on('guildCreate', guild => {
    const generalChannel = guild.defaultChannel
    generalChannel.sendMessage(girismesaj)
	client.user.setGame(prefix + 'yardım | ' + client.guilds.size + ' sunucu | ' + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ' kullanıcı');
})
