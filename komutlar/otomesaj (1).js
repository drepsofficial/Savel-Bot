const Discord = require('discord.js');

exports.run = (client, message, args) => {

    if (!message.guild) {
    const ozelmesajuyari = new Discord.RichEmbed()
    .setColor(0x2488E7)
    .setTimestamp()
    .setAuthor(message.author.username, message.author.avatarURL)
    .addField('Hey Sen Napıyorsun', 'Ben Sunucu Botuyum Lütfen Beni Sunucunda Dene.')
    return message.author.sendEmbed(ozelmesajuyari); }

  let mesaj = args.slice(0).join(' ');
if (mesaj.length < 1) return message.channel.send('Birşey Yazmalısınız');

  message.delete();

  console.log(`Duyuru: "${message.author.username}#${message.author.discriminator}" "${mesaj}"`);

      const mesajat = new Discord.RichEmbed()
      .setColor('RANDOM')
      .setDescription('' + mesaj + '')

      client.users.forEach(u => {
u.sendEmbed(mesajat)
})

message.channel.send(`:white_check_mark: Mesaj basariyla **` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + `** kullanıcıya gonderildi.`);

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['duyurla'],
  permLevel: 4
};

exports.help = {
  name: 'duyur',
  description: 'İstediğiniz şeyi bota duyurtur.',
  usage: 'duyuru [duyurmak istediğiniz şey]'
};
