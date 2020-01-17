const Discord = require('discord.js');

 exports.run = (client, message, args) => {
   var cevaplar = ['Otorol komutu kullanmak için #giriş-çıkış adlı bir kanal oluşturup @Üye , @Er adlı rol oluşturmalısın.'];
   var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)];
   message.reply(cevap);
};
exports.conf = {
 enabled: true,
 guildOnly: false,
 aliases: ['roloto', 'roloto','roloto'],
 permLevel: 0 ,
};

exports.help = {
 name: 'roloto',
 description: 'Oto rol ayarlar.',
 usage: 'cilgin'
};
